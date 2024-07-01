import { FlatList, HStack, Heading, VStack, Text } from 'native-base'

import { ExerciseCard } from '@components/ExerciseCard'
import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'

import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorProps } from '@routes/app.routes'
export function Home() {
  const [groups, setGroups] = useState(['costa', 'ombro'])
  
  const [exercises, setExercises] = useState(['Puxada Frontal', 'Remada Unilateral', 'Levantamento de Peito', 'Agachamento Lateral'])
  
  const [groupSelected, setGroupSelected] = useState('costas')
  const navigate= useNavigation<AppNavigatorProps>()

  function handleOpenExerciseDetails() {
    navigate.navigate('exercise')
  }
  return (
    <VStack flex={1}>
      <HomeHeader />

     <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Group 
            name={item}
            isActive={groupSelected === item}
            onPress={()=> setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        minH={10}
     />
      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>

        </HStack>
        <FlatList 
          data={exercises}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <ExerciseCard name={item} onPress={handleOpenExerciseDetails}/>
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  )
}