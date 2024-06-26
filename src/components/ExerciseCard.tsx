import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
name: string
series?: string
image?: string
}
export function ExerciseCard({ name, series, image,...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} mb={3} rounded="md">
      <Image 
          source={{ uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg' }}
          alt="Imagem do exercício"
          w={16}
          h={16}
          rounded="md"
          mr={4}
          resizeMode="center"
        />
    <VStack flex={1}>
      <Heading color="white" fontSize="lg">
        {name}
      </Heading>

      <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}> 
        Series: 3 | Repetições: 12
      </Text>
    </VStack>
    <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
    </HStack>
    </TouchableOpacity>
  )
}