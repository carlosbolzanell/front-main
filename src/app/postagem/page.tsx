import InputText from "@/components/input-text/InputText";
import { Button } from "@/components/ui/button";

export default function Postagem() {
    return (
        <main>
            <section className="flex flex-col items-center w-[70%] mt-10 rounded mx-auto border-2 border-blue-700">
                <h1 className="text-3xl my-12">Faça upload do seu meme</h1>
                <div className="w-[80%] mx-auto">
                    <InputText placeholder="Titulo da publicação" />

                    <div className="my-12">
                        <p className="text-xl mb-2">Imagem:</p>
                        <div className="border border-blue-700 rounded h-64 flex flex-col items-center justify-center">
                            <img src="./assets/upload.svg" alt="" />
                            <p className="mt-2 text-xl">Arraste pra cá ou selecione sua imagem</p>
                        </div>
                    </div>

                    <Button>Postar Meme</Button>

                </div>

            </section>
        </main>
    )
}