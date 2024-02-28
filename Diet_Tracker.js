import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const WATER_INTAKES = {
  children: [
    { category: '2-5 years', intake: 13 },
    { category: '6-11 years', intake: 20 },
    { category: '12-19 years', intake: 31 },
  ],
  adults: [
    { category: '20-39 years', intake: 51 },
    { category: '40-59 years', intake: 43 },
    { category: '60+ years', intake: 36 },
  ],
};

const App = () => {
  const [selectedFeature, setSelectedFeature] = useState(null); // Track the selected feature
  const [isDarkMode, setIsDarkMode] = useState(false); // Track the dark mode

  const handlePressCalorieCounter = () => {
    setSelectedFeature('calorieCounter'); // Set selected feature as Calorie Counter
  };

  const handlePressWaterIntake = () => {
    setSelectedFeature('waterIntake'); // Set selected feature as Water Intake
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle dark mode
  };

// Render the selected feature based on the selectedFeature state
const renderFeature = () => {
  if (selectedFeature === 'calorieCounter') {
    return renderCalorieCounter();
  } else if (selectedFeature === 'waterIntake') {
    return renderWaterIntake();
  }
  return null;
};


  // Calorie Counter feature
  const [foodList, setFoodList] = useState([]); // List of food items
  const [foodName, setFoodName] = useState(''); // Name of the current food item
  const [calorieCount, setCalorieCount] = useState(''); // Calorie count of the current food item
  const [totalCalories, setTotalCalories] = useState(0); // Total calorie count

  // Function to handle adding a food item
  const addFood = () => {
    if (foodName && calorieCount) {
      // Check if both foodName and calorieCount are not empty
      const newFood = { name: foodName, calories: parseInt(calorieCount) };
      setFoodList([...foodList, newFood]); // Add the new food item to the foodList array
      setTotalCalories(totalCalories + parseInt(calorieCount)); // Update the total calorie count
      setFoodName(''); // Clear the foodName input field
      setCalorieCount(''); // Clear the calorieCount input field
    }
  };

  const renderCalorieCounter = () => {
    return (
      <View style={{ backgroundColor: isDarkMode ? 'black' : 'white', paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 24, color: isDarkMode ? 'white' : 'black' }}>
          Total Calories: {totalCalories}
        </Text>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <TextInput
            style={{
              flex: 1,
              marginRight: 10,
              padding: 10,
              borderColor: isDarkMode ? 'white' : 'black',
              borderWidth: 1,
              color: isDarkMode ? 'white' : 'black',
            }}
            placeholder="Food Name"
            value={foodName}
            onChangeText={setFoodName}
          />
          <TextInput
            style={{
              flex: 1,
              marginRight: 10,
              padding: 10,
              borderColor: isDarkMode ? 'white' : 'black',
              borderWidth: 1,
              color: isDarkMode ? 'white' : 'black',
            }}
            placeholder="Calorie Count"
            keyboardType="numeric"
            value={calorieCount}
            onChangeText={setCalorieCount}
          />
          <Button
            title="Add"
            onPress={addFood}
            color="#2196F3"
            style={{ borderRadius: 5 }}
          />
        </View>
        <FlatList
          data={foodList}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
              <Text style={{ flex: 1, color: isDarkMode ? 'white' : 'black' }}>{item.name}</Text>
              <Text style={{ flex: 1, color: isDarkMode ? 'white' : 'black' }}>{item.calories}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  // Water Intake feature
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [healthStatus, setHealthStatus] = useState('');
  const [waterDrank, setWaterDrank] = useState('');

  const calculateWaterIntake = () => {
    if (!age || !sex) {
      return 'Please enter your age and select your sex.';
    }

    let category;

    if (age >= 2 && age <= 5) {
      category = 'children';
    } else if (age >= 6 && age <= 11) {
      category = 'children';
    } else if (age >= 12 && age <= 19) {
      category = 'children';
    } else if (age >= 20 && age <= 39) {
      category = 'adults';
    } else if (age >= 40 && age <= 59) {
      category = 'adults';
    } else if (age >= 60) {
      category = 'adults';
    } else {
      return 'Please enter a valid age.';
    }

    const waterIntake = WATER_INTAKES[category].find(
      item => age >= parseInt(item.category.split('-')[0]) && age <= parseInt(item.category.split('-')[1])
    )?.intake;

    if (!waterIntake) {
      return 'We could not determine your recommended water intake.';
    }

    let statusText = `Your recommended water intake is ${waterIntake} ounces per day.`;

    if (sex === 'female') {
      statusText += ' (Women should add 9 ounces for pregnant women and 4 ounces for breastfeeding women.)';
    }

    if (healthStatus) {
      statusText += ` (${healthStatus})`;
    }

    if (waterDrank) {
      const remainingWater = waterIntake - waterDrank;
      if (remainingWater > 0) {
        statusText += ` You need to drink ${remainingWater} more ounces of water to reach your daily goal.`;
      } else {
        statusText += ` You have reached your daily water intake goal!`;
      }
    }

    return statusText;
  };

  const handleWaterDrank = () => {
    if (!waterDrank || isNaN(waterDrank)) {
      alert('Please enter a valid number for water drank.');
      return;
    }
    setWaterDrank(parseFloat(waterDrank));
  };

  const handleSubmit = () => {
    const statusText = calculateWaterIntake();
    alert(statusText);
  };

const renderWaterIntake = () => {
  return (
    <View style={{ padding: 20, backgroundColor: isDarkMode ? 'black' : 'white' }}>
      <View style={{ padding: 20, backgroundColor: 'white' }}>
        <Text style={{ color: isDarkMode ? 'white' : 'black' }}>Enter your age:</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            color: isDarkMode ? 'white' : 'black',
          }}
          keyboardType="numeric"
          value={age}
          onChangeText={text => setAge(text)}
        />

          <Text>Select your sex:</Text>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Button
              title="Male"
              onPress={() => setSex('male')}
              color={sex === 'male' ? 'blue' : 'gray'}
              style={{ borderRadius: 5, marginHorizontal: 5 }}
            />
            <Button
              title="Female"
              onPress={() => setSex('female')}
              color={sex === 'female' ? 'blue' : 'gray'}
              style={{ borderRadius: 5, marginHorizontal: 5 }}
            />
          </View>

          <Text>Select your health status:</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
            value={healthStatus}
            onChangeText={text => setHealthStatus(text)}
          />

          <Text> Enter the water amount (in ounces):</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
            keyboardType="numeric"
            value={waterDrank}
            onChangeText={text => setWaterDrank(text)}
          />

          <Button title="Submit" onPress={handleSubmit} style={{ borderRadius: 5 }} />
        </View>
      </View>
    );
  };

  return (
    <View style={{ padding: 20, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* Calorie Counter Button */}
        <Button
          title="Calorie Counter"
          onPress={handlePressCalorieCounter}
          color="green"
          style={{ borderRadius: 5 }}
        />

        {/* Water Intake Button */}
        <Button
          title="Water Intake"
          onPress={handlePressWaterIntake}
          color="blue"
          style={{ borderRadius: 5 }}
        />
      </View>

      {/* Render the selected feature */}
      {renderFeature()}
    </View>
  );
};

export default App;
