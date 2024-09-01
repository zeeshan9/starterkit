import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const animals: any = [
  { name: 'Cat', image: require('../../assets/imgs/cat.png'), sound: require('../../assets/sounds/cat.mp3') },
  { name: 'Dog', image: require('../../assets/imgs/dog.png'), sound: require('../../assets/sounds/dog.mp3') },
  { name: 'Cow', image: require('../../assets/imgs/cow.png'), sound: require('../../assets/sounds/cow.mp3') },
  { name: 'Horse', image: require('../../assets/imgs/duck.png'), sound: require('../../assets/sounds/horse.mp3') },
];

export default function AnimalSoundsGame() {
  const [score, setScore] = useState(0);
  const [currentAnimal, setCurrentAnimal]: any = useState(null);

  useEffect(() => {
    pickRandomAnimal();
  }, []);

  const pickRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setCurrentAnimal(animals[randomIndex]);
  };

  const playSound = async (sound: any) => {
    const { sound: playbackObject } = await Audio.Sound.createAsync(sound);
    await playbackObject.playAsync();
  };

  const handleAnimalPress = (animal: any) => {
    playSound(animal.sound);
    if (animal.name === currentAnimal.name) {
      setScore(score + 1);
    }
    pickRandomAnimal();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animal Sounds Game</Text>
      <Text style={styles.score}>Score: {score}</Text>
      <View style={styles.gameArea}>
        <Text style={styles.instruction}>Tap the {currentAnimal?.name}!</Text>
        <View style={styles.animalGrid}>
          {animals.map((animal: any) => (
            <TouchableOpacity
              key={animal.name}
              style={styles.animalButton}
              onPress={() => handleAnimalPress(animal)}
            >
              <Image source={animal.image} style={styles.animalImage} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  score: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666',
  },
  gameArea: {
    alignItems: 'center',
  },
  instruction: {
    fontSize: 20,
    marginBottom: 20,
    color: '#444',
  },
  animalGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  animalButton: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  animalImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});