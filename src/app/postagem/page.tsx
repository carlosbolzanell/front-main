'use client'
import { mandarPostagem } from "@/api/postagem";
import InputText from "@/components/input-text/InputText";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Postagem() {

    const [file, setFile] = useState<File>()
    const [legenda, setLegenda] = useState<string>("")
    const [url, setUrl] = useState<string>("")

    const setarFile = (file: FileList | null) => {
        if (file) {
            setFile(file[0])

            const reader: any = new FileReader();
            reader.onload = () => {
                setUrl(reader.result);
            };
            reader.readAsDataURL(file[0]);
        }
    }

    const mandarPublicacao = async () => {
        const formData = new FormData()
        const obj = {
            legenda: legenda,
            usuarioId: 1
        }
        formData.append("dto", new Blob([JSON.stringify(obj)], { type: 'application/json' }))
        file && formData.append("file", file)
        const reponse = mandarPostagem(formData);
    }

    return (
        <main>
            <section className="flex flex-col items-center w-[70%] my-10 rounded mx-auto border-2 border-blue-700">
                <h1 className="text-3xl my-12">Faça upload do seu meme</h1>
                <div className="w-[80%] mx-auto">
                    <InputText 
                        placeholder="Titulo da publicação" 
                        value={legenda}
                        onChange={(e)=> setLegenda(e.target.value)}    
                    />

                    <div className="my-12">
                        <p className="text-xl mb-2">Imagem:</p>
                        {
                            url ? 
                            (
                                <div className="w-[80%] mx-auto">
                                    <img src={url} alt="" />
                                </div>
                            )
                            :
                            (
                                <label htmlFor="inputfile" className="border border-blue-700 rounded h-64 flex flex-col items-center justify-center">
                                    <img src="./assets/upload.svg" alt="" />
                                    <p className="mt-2 text-xl">Arraste pra cá ou selecione sua imagem</p>
                                </label>
                            ) 
                        }
                        <input type="file" id="inputfile" className="hidden" onChange={(e) => setarFile(e.target.files)} />
                    </div>
                </div>
            </section>
            <div className="flex justify-center">
                <Button
                    onClick={mandarPublicacao}
                    className="border border-blue-700 rounded px-16 py-6 mb-6 text-xl"
                >Postar Meme</Button>
            </div>
        </main>
    )
}