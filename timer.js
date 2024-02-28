import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  useColorScheme,
  Vibration,
  FlatList,
  Image,
} from 'react-native';

const Timer = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const [seconds, setSeconds] = useState(60);
  const [selectedDuration, setSelectedDuration] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [isVibrating, setIsVibrating] = useState(false);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState(null);

  const muscleGroups = [
    { id: 1, name: 'Chest' },
    { id: 2, name: 'Back' },
    { id: 3, name: 'Legs' },
    { id: 4, name: 'Arms' },
    { id: 5, name: 'Shoulders' },
  ];

  const exercisesByMuscleGroup = {
    Chest: [
      { id: 1, name: 'Bench', image: require('@assets/images/bench.jpg') },
      { id: 2, name: 'Push Up', image: require('@assets/images/pushup.jpg') },
    ],
    Back: [
      { id: 1, name: 'Pull Up', image: require('@assets/images/pullup.jpg') },
      { id: 2, name: 'Lat Pulldown', image: require('@assets/images/latpulldown.jpg') },
    ],
    Legs: [
      { id: 1, name: 'Leg Press', image: require('@assets/images/legpress.jpg') },
      { id: 2, name: 'Barbell Squat', image: require('@assets/images/barbellsquat.jpg') },
      { id: 3, name: 'Calf Raises', image: require('@assets/images/calf.jpg') },
    ],
    Arms: [
      { id: 1, name: 'Bicep Curls', image: require('@assets/images/bicep.jpg') },
      { id: 2, name: 'Cable Tricep Pulldown', image: require('@assets/images/triceppull.jpg') },
    ],
    Shoulders: [
      { id: 1, name: 'Dumbell Shoulder Press', image: require('@assets/images/dumsho.jpg') },
    ],
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    if (seconds === 0) {
      clearInterval(interval);
      setIsVibrating(true);
      Vibration.vibrate([1000, 1000], { interval: 2000 }); // Vibrate with a pattern
    }

    return () => {
      clearInterval(interval);
      Vibration.cancel(); // Stop vibrating when the component unmounts or timer resets
    };
  }, [isActive, seconds, isVibrating]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setSeconds(selectedDuration);
    setIsActive(false);
    setIsVibrating(false);
    Vibration.cancel(); // Stop vibrating when the timer is reset
  };

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
    setSeconds(duration);
    setIsActive(false);
  };

  const handlePreviousExercise = () => {
    setCurrentExerciseIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextExercise = () => {
    setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
  };

  const handleMuscleGroupSelect = (muscleGroup) => {
    setSelectedMuscleGroup(muscleGroup);
    setCurrentExerciseIndex(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const remainingSeconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  };

  const timerTextStyle = {
    ...styles.timerText,
    color: isDarkMode ? 'white' : 'black',
  };

  const containerStyle = {
    ...styles.container,
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  const exerciseContainerStyle = {
    ...styles.exerciseContainer,
    justifyContent: 'center',
  };

  const exerciseContentStyle = {
    ...styles.exerciseContent,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const exerciseImageStyle = {
    ...styles.exerciseImage,
    backgroundColor: isDarkMode ? 'gray' : 'lightgray',
  };

  const exerciseTextStyle = {
    ...styles.exerciseText,
    color: isDarkMode ? 'white' : 'black',
  };

  const buttonStyle = {
    ...styles.button,
    backgroundColor: isDarkMode ? '#333' : '#eee',
    color: isDarkMode ? 'white' : 'black',
  };

  const muscleGroupButtonStyle = {
    ...styles.muscleGroupButton,
    backgroundColor: isDarkMode ? '#333' : '#eee',
    color: isDarkMode ? 'white' : 'black',
  };

  return (
    <View style={containerStyle}>
      <View style={exerciseContainerStyle}>
        <Button
          title="Previous"
          onPress={handlePreviousExercise}
          disabled={currentExerciseIndex === 0}
          color={isDarkMode ? 'white' : 'black'}
        />
        <View style={exerciseContentStyle}>
          {selectedMuscleGroup && (
            <Image
              source={exercisesByMuscleGroup[selectedMuscleGroup][currentExerciseIndex].image}
              style={exerciseImageStyle}
            />
          )}
          {selectedMuscleGroup && (
            <Text style={exerciseTextStyle}>
              {exercisesByMuscleGroup[selectedMuscleGroup][currentExerciseIndex].name}
            </Text>
          )}
        </View>
        <Button
          title="Next"
          onPress={handleNextExercise}
          disabled={
            !selectedMuscleGroup ||
            currentExerciseIndex === exercisesByMuscleGroup[selectedMuscleGroup].length - 1
          }
          color={isDarkMode ? 'white' : 'black'}
        />
      </View>
      <View style={styles.timerContainer}>
        <Text style={timerTextStyle}>{formatTime(seconds)}</Text>
      </View>
      <View style={styles.durationButtonsContainer}>
      <Button
          title="5s"
          onPress={() => handleDurationChange(5)}
          style={styles.durationButton}
          disabled={isActive}
          color={isDarkMode ? 'blue' : 'blue'}
        />
        <Button
          title="60s"
          onPress={() => handleDurationChange(60)}
          style={styles.durationButton}
          disabled={isActive}
          color={isDarkMode ? 'blue' : 'blue'}
        />
        <Button
          title="90s"
          onPress={() => handleDurationChange(90)}
          style={styles.durationButton}
          disabled={isActive}
          color={isDarkMode ? 'blue' : 'blue'}
        />
        <Button
          title="2m"
          onPress={() => handleDurationChange(120)}
          style={styles.durationButton}
          disabled={isActive}
          color={isDarkMode ? 'blue' : 'blue'}
        />
      </View>
      <View style={styles.muscleGroupButtonsContainer}>
        {muscleGroups.map((muscleGroup) => (
          <Button
            key={muscleGroup.id}
            title={muscleGroup.name}
            onPress={() => handleMuscleGroupSelect(muscleGroup.name)}
            style={muscleGroupButtonStyle}
            color={isDarkMode ? 'white' : 'black'}
          />
        ))}
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title={isActive ? 'Pause' : 'Start'}
          onPress={handleStartStop}
          style={buttonStyle}
          color={isDarkMode ? 'white' : 'black'}
        />
        <Button
          title="Reset"
          onPress={handleReset}
          style={buttonStyle}
          disabled={!isActive && seconds === selectedDuration}
          color={isDarkMode ? 'white' : 'black'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  exerciseContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  exerciseText: {
    fontSize: 18,
    textAlign: 'center',
  },
  timerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 32,
  },
  durationButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 10,
  },
  durationButton: {
    width: '30%',
  },
  muscleGroupButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  muscleGroupButton: {
    width: '5%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    width: '100%',
  },
});

export default Timer;