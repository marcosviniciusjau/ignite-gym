import { VStack, Skeleton, ScrollView, Center, Text, Heading } from 'native-base'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

const PHOTO_SIZE = 33
export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [userPhoto, setUserPhoto] = useState('https://github.com/marcosviniciusjau.png')
  async function handleUserPhotoSelected() {
    setPhotoIsLoading(true)
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
        aspect: [4, 4],
      })
      if(photoSelected.canceled) {
        return
      }
      if(photoSelected.assets[0].uri) {
        setUserPhoto(photoSelected.assets[0].uri)
      }
    } catch (error) {
      console.error(error)
    }
    finally{
      setPhotoIsLoading(false)
    }

  }
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
            source={{ uri: userPhoto }}
            alt="Imagem do perfil"
            size={PHOTO_SIZE}
          />
        }
        <TouchableOpacity onPress={handleUserPhotoSelected} >
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