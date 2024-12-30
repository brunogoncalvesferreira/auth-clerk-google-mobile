import * as SecureStore from 'expo-secure-store'

async function getToken(key: string) {
  try {
    return SecureStore.getItem(key)
  } catch (error) {
    throw new Error('Não foi possível obter o token')
  }
}

async function saveToken(key: string, value: string) {
  try {
    return SecureStore.setItemAsync(key, value)
  } catch (error) {
    throw new Error('Não foi possível salvar o token')
  }
}

export const tokenCache = {
  getToken, saveToken
}