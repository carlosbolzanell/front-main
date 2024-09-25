import { api } from "./api"

export const mandarPostagem = async (payload: any) => {
    const response = await api.post("/postagem", payload)
    return response.data
}