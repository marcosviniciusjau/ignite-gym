import { HStack, Heading, Text, Icon, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";

export function Header(){
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{
          uri: 'https://github.com/diego3g.png'
        }}
        size={16}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md">
          Marcos
        </Heading>
      </VStack>
      <TouchableOpacity>
       <Icon as={MaterialIcons} name="logout" size={7} color="#FFF" />
      </TouchableOpacity>
    </HStack>
  )
}