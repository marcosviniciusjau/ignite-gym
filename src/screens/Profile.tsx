import { VStack, Skeleton, ScrollView, Center, Text, Heading } from 'native-base'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'

import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

const PHOTO_SIZE = 33
export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil"/>
      <ScrollView>
        <Center mt={6} px={10}>
          {
            photoIsLoading ?
            <Skeleton 
            w={PHOTO_SIZE} 
            h={PHOTO_SIZE}
            rounded="full"
            startColor="gray.500"
            endColor="gray.400"
          />
          :
          <UserPhoto
            source={{ uri: 'https://github.com/marcosviniciusjau.png' }}
            alt="Imagem do perfil"
            size={PHOTO_SIZE}
          />
        }
        <TouchableOpacity onPress={() => setPhotoIsLoading(!photoIsLoading)}>
          <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>Alterar foto</Text>
        </TouchableOpacity>
        <Input 
          placeholder="Nome"
          bg="gray.600"
          mb={4}
         />
        <Input 
          placeholder="E-mail"
          bg="gray.600"
          isDisabled
         />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color="gray.200" fontFamily="heading" fontSize="md" mb={2}>
            Alterar senha
          </Heading>
          <Input 
            placeholder="Senha antiga"
            bg="gray.600"
            secureTextEntry
            mb={4}
          />
          <Input 
            placeholder="Nova senha"
            bg="gray.600"
            secureTextEntry
            mb={4}
          />

          <Input 
            placeholder="Confirme a nova senha"
            bg="gray.600"
            secureTextEntry
            mb={4}
          />
          <Button 
            title="Atualizar"
            mt={4}
           />
        </VStack>
      </ScrollView>
    </VStack>
  )
}