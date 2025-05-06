
import axios from "axios";

export async function fetchUserData(userId: number, token: string) {
  try {
    const response = await axios.get(`http://localhost:3000/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    throw error;
  }
}

export async function updateUserData(userId: number, token: string, userData: any) {
  try {
    const response = await axios.put(`http://localhost:3000/users/${userId}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    throw error;
  }
}
