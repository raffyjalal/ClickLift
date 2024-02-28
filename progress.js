import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

const WorkoutData = () => {
  const [workoutData, setWorkoutData] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  const [caloriesBurnedMonday, setCaloriesBurnedMonday] = useState('');
  const [repetitionsMonday, setRepetitionsMonday] = useState('');
  const [setsMonday, setSetsMonday] = useState('');

  const [caloriesBurnedTuesday, setCaloriesBurnedTuesday] = useState('');
  const [repetitionsTuesday, setRepetitionsTuesday] = useState('');
  const [setsTuesday, setSetsTuesday] = useState('');

  const [caloriesBurnedWednesday, setCaloriesBurnedWednesday] = useState('');
  const [repetitionsWednesday, setRepetitionsWednesday] = useState('');
  const [setsWednesday, setSetsWednesday] = useState('');

  const [caloriesBurnedThursday, setCaloriesBurnedThursday] = useState('');
  const [repetitionsThursday, setRepetitionsThursday] = useState('');
  const [setsThursday, setSetsThursday] = useState('');

  const [caloriesBurnedFriday, setCaloriesBurnedFriday] = useState('');
  const [repetitionsFriday, setRepetitionsFriday] = useState('');
  const [setsFriday, setSetsFriday] = useState('');

  const [caloriesBurnedSaturday, setCaloriesBurnedSaturday] = useState('');
  const [repetitionsSaturday, setRepetitionsSaturday] = useState('');
  const [setsSaturday, setSetsSaturday] = useState('');

  const [caloriesBurnedSunday, setCaloriesBurnedSunday] = useState('');
  const [repetitionsSunday, setRepetitionsSunday] = useState('');
  const [setsSunday, setSetsSunday] = useState('');

  const [totalCaloriesBurned, setTotalCaloriesBurned] = useState(0);
  const [totalSets, setTotalSets] = useState(0);
  const [totalReps, setTotalReps] = useState(0);

  const addWorkoutData = (dayOfWeek) => {
    let caloriesBurned, repetitions, sets;

    if (dayOfWeek === 'Monday') {
      caloriesBurned = caloriesBurnedMonday;
      repetitions = repetitionsMonday;
      sets = setsMonday;
    } else if (dayOfWeek === 'Tuesday') {
      caloriesBurned = caloriesBurnedTuesday;
      repetitions = repetitionsTuesday;
      sets = setsTuesday;
    } else if (dayOfWeek === 'Wednesday') {
      caloriesBurned = caloriesBurnedWednesday;
      repetitions = repetitionsWednesday;
      sets = setsWednesday;
    } else if (dayOfWeek === 'Thursday') {
      caloriesBurned = caloriesBurnedThursday;
      repetitions = repetitionsThursday;
      sets = setsThursday;
    } else if (dayOfWeek === 'Friday') {
      caloriesBurned = caloriesBurnedFriday;
      repetitions = repetitionsFriday;
      sets = setsFriday;
    } else if (dayOfWeek === 'Saturday') {
      caloriesBurned = caloriesBurnedSaturday;
      repetitions = repetitionsSaturday;
      sets = setsSaturday;
    } else if (dayOfWeek === 'Sunday') {
      caloriesBurned = caloriesBurnedSunday;
      repetitions = repetitionsSunday;
      sets = setsSunday;
    }

    if (caloriesBurned !== '' && repetitions !== '' && sets !== '') {
      const newWorkoutData = {
        id: Date.now(),
        caloriesBurned: parseInt(caloriesBurned),
        repetitions: parseInt(repetitions),
        sets: parseInt(sets),
      };

      setWorkoutData((prevWorkoutData) => ({
        ...prevWorkoutData,
        [dayOfWeek]: [...prevWorkoutData[dayOfWeek], newWorkoutData],
      }));

      setTotalCaloriesBurned((prevTotal) => prevTotal + newWorkoutData.caloriesBurned);
      setTotalSets((prevTotal) => prevTotal + newWorkoutData.sets);
      setTotalReps((prevTotal) => prevTotal + newWorkoutData.repetitions);

      // Clear the input values for the specific day
      if (dayOfWeek === 'Monday') {
        setCaloriesBurnedMonday('');
        setRepetitionsMonday('');
        setSetsMonday('');
      } else if (dayOfWeek === 'Tuesday') {
        setCaloriesBurnedTuesday('');
        setRepetitionsTuesday('');
        setSetsTuesday('');
      } else if (dayOfWeek === 'Wednesday') {
        setCaloriesBurnedWednesday('');
        setRepetitionsWednesday('');
        setSetsWednesday('');
      } else if (dayOfWeek === 'Thursday') {
        setCaloriesBurnedThursday('');
        setRepetitionsThursday('');
        setSetsThursday('');
      } else if (dayOfWeek === 'Friday') {
        setCaloriesBurnedFriday('');
        setRepetitionsFriday('');
        setSetsFriday('');
      } else if (dayOfWeek === 'Saturday') {
        setCaloriesBurnedSaturday('');
        setRepetitionsSaturday('');
        setSetsSaturday('');
      } else if (dayOfWeek === 'Sunday') {
        setCaloriesBurnedSunday('');
        setRepetitionsSunday('');
        setSetsSunday('');
      }
    }
  };

  const clearWorkoutData = () => {
    setWorkoutData({
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    });
    setTotalCaloriesBurned(0);
    setTotalSets(0);
    setTotalReps(0);

    // Clear the input values for all days of the week
    setCaloriesBurnedMonday('');
    setRepetitionsMonday('');
    setSetsMonday('');

    setCaloriesBurnedTuesday('');
    setRepetitionsTuesday('');
    setSetsTuesday('');

    setCaloriesBurnedWednesday('');
    setRepetitionsWednesday('');
    setSetsWednesday('');

    setCaloriesBurnedThursday('');
    setRepetitionsThursday('');
    setSetsThursday('');

    setCaloriesBurnedFriday('');
    setRepetitionsFriday('');
    setSetsFriday('');

    setCaloriesBurnedSaturday('');
    setRepetitionsSaturday('');
    setSetsSaturday('');

    setCaloriesBurnedSunday('');
    setRepetitionsSunday('');
    setSetsSunday('');
  };

  return (
    <ScrollView>
      <View>
        <Text>Workout Information</Text>
        <Text>Total Calories Burned: {totalCaloriesBurned}</Text>
        <Text>Total Sets: {totalSets}</Text>
        <Text>Total Reps: {totalReps}</Text>

        <Text>Monday</Text>
        <TextInput
          value={caloriesBurnedMonday}
          onChangeText={setCaloriesBurnedMonday}
          placeholder="Calories Burned"
          keyboardType="numeric"
        />
        <TextInput
          value={repetitionsMonday}
          onChangeText={setRepetitionsMonday}
          placeholder="Repetitions"
          keyboardType="numeric"
        />
        <TextInput
          value={setsMonday}
          onChangeText={setSetsMonday}
          placeholder="Sets"
          keyboardType="numeric"
        />
        <Button title="Add Workout Data" onPress={() => addWorkoutData('Monday')} />

        <Text>Tuesday</Text>
        <TextInput
          value={caloriesBurnedTuesday}
          onChangeText={setCaloriesBurnedTuesday}
          placeholder="Calories Burned"
          keyboardType="numeric"
        />
        <TextInput
          value={repetitionsTuesday}
          onChangeText={setRepetitionsTuesday}
          placeholder="Repetitions"
          keyboardType="numeric"
        />
        <TextInput
          value={setsTuesday}
          onChangeText={setSetsTuesday}
          placeholder="Sets"
          keyboardType="numeric"
        />
        <Button title="Add Workout Data" onPress={() => addWorkoutData('Tuesday')} />

        <Text>Wednesday</Text>
        <TextInput
          value={caloriesBurnedWednesday}
          onChangeText={setCaloriesBurnedWednesday}
          placeholder="Calories Burned"
          keyboardType="numeric"
        />
        <TextInput
          value={repetitionsWednesday}
          onChangeText={setRepetitionsWednesday}
          placeholder="Repetitions"
          keyboardType="numeric"
        />
        <TextInput
          value={setsWednesday}
          onChangeText={setSetsWednesday}
          placeholder="Sets"
          keyboardType="numeric"
        />
        <Button title="Add Workout Data" onPress={() => addWorkoutData('Wednesday')} />

        <Text>Thursday</Text>
        <TextInput
          value={caloriesBurnedThursday}
          onChangeText={setCaloriesBurnedThursday}
          placeholder="Calories Burned"
          keyboardType="numeric"
        />
        <TextInput
          value={repetitionsThursday}
          onChangeText={setRepetitionsThursday}
          placeholder="Repetitions"
          keyboardType="numeric"
        />
        <TextInput
          value={setsThursday}
          onChangeText={setSetsThursday}
          placeholder="Sets"
          keyboardType="numeric"
        />
        <Button title="Add Workout Data" onPress={() => addWorkoutData('Thursday')} />

        <Text>Friday</Text>
        <TextInput
          value={caloriesBurnedFriday}
          onChangeText={setCaloriesBurnedFriday}
          placeholder="Calories Burned"
          keyboardType="numeric"
        />
        <TextInput
          value={repetitionsFriday}
          onChangeText={setRepetitionsFriday}
          placeholder="Repetitions"
          keyboardType="numeric"
        />
        <TextInput
          value={setsFriday}
          onChangeText={setSetsFriday}
          placeholder="Sets"
          keyboardType="numeric"
        />
        <Button title="Add Workout Data" onPress={() => addWorkoutData('Friday')} />

        <Text>Saturday</Text>
        <TextInput
          value={caloriesBurnedSaturday}
          onChangeText={setCaloriesBurnedSaturday}
          placeholder="Calories Burned"
          keyboardType="numeric"
        />
        <TextInput
          value={repetitionsSaturday}
          onChangeText={setRepetitionsSaturday}
          placeholder="Repetitions"
          keyboardType="numeric"
        />
        <TextInput
          value={setsSaturday}
          onChangeText={setSetsSaturday}
          placeholder="Sets"
          keyboardType="numeric"
        />
        <Button title="Add Workout Data" onPress={() => addWorkoutData('Saturday')} />

        <Text>Sunday</Text>
        <TextInput
          value={caloriesBurnedSunday}
          onChangeText={setCaloriesBurnedSunday}
          placeholder="Calories Burned"
          keyboardType="numeric"
        />
        <TextInput
          value={repetitionsSunday}
          onChangeText={setRepetitionsSunday}
          placeholder="Repetitions"
          keyboardType="numeric"
        />
        <TextInput
          value={setsSunday}
          onChangeText={setSetsSunday}
          placeholder="Sets"
          keyboardType="numeric"
        />
        <Button title="Add Workout Data" onPress={() => addWorkoutData('Sunday')} />

        <Button title="Clear Workout Data" onPress={clearWorkoutData} />

        <Text>Workout Summary</Text>
        {Object.entries(workoutData).map(([day, data]) => (
          <View key={day}>
            <Text>{day}</Text>
            {data.map((workout) => (
              <Text key={workout.id}>
                Calories Burned: {workout.caloriesBurned}, Repetitions: {workout.repetitions}, Sets: {workout.sets}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const App = () => {
const [totalCaloriesBurned, setTotalCaloriesBurned] = useState(0);

return (
<View>
<WorkoutData setTotalCaloriesBurned={setTotalCaloriesBurned} />
</View>
);
};

export default App;

