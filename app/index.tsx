/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar'
import { Text, ImageBackground, TouchableOpacity, View } from 'react-native'
import blurbg from '../src/assets/bg-blur.png'
import Stripes from '../src/assets/stripes.svg'
import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import { useRouter } from 'expo-router'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import {
  BaiJamjuree_700Bold
} from '@expo-google-fonts/bai-jamjuree'
import { styled } from 'nativewind';
import React from 'react';
// import React = require('react');

const StyledStripes = styled(Stripes)

export default function App() {
  const router = useRouter()

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  })

  //nao mostarr a interface até as fontes carregarem
  if(!hasLoadedFonts){
    return null
  }

  async function goMemories() {
  router.push('/memories')
  }

  return (
    <ImageBackground source={blurbg} 
    className='bg-gray-950 items-center justify-center flex-1 relative'
    imageStyle={{position:'absolute', left:'-100%'}}>
     <StyledStripes className='absolute left-2'/>

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
        <Text className="text-center font-body text-sm leading-relaxed text-gray-200 pb-1">
        Feito com 💜 no NLW da Rocketseat
      </Text>
      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}
