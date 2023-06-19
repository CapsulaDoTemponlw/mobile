/* eslint-disable prettier/prettier */
import { Text, TouchableOpacity, View } from 'react-native'
import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import { useRouter } from 'expo-router'
import React from 'react'

export default function App() {
  const router = useRouter()


  async function goMemories() {
  router.push('/memories')
  }

  return (
    <View className="flex-1 items-center px-8 py-10">
    <View className="flex-1 items-center justify-center gap-6">
      <NLWLogo />

      <View className="space-y-2">
        <Text className="text-center font-title text-2xl leading-tight text-gray-50">
          Sua cápsula do tempo
        </Text>
        <Text className="text-center font-body text-base leading-relaxed text-gray-100">
          Colecione momentos marcantes da sua jornada e compartilhe (se
          quiser) com o mundo!
        </Text>
      </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full px-5 py-2 bg-orange-300 "
          onPress={() => goMemories()}
        >
           <Text className="font-alt text-sm uppercase text-black">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>
    </View>
  );
}
