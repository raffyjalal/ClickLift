import React from 'react'
import {StatusBar} from 'expo-status-bar';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function MapScreen({ route, navigation }) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollViewMap}
        >
          <View style={styles.containerMap}>
            <Text style={styles.titleMap}>Click a Muscle</Text>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../src/assets/images/humanbody.jpg')}
                style={styles.imageMap}
              />
              <View style={styles.buttonContainerMapback}>
                <TouchableOpacity
                  style={styles.buttonMap}
                  onPress={() => navigation.navigate('Back', { screenTitle: 'Back' })}
                >
                  <Text style={styles.buttonTextMap}>Back</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainerMapshoulders}>
                <TouchableOpacity
                  style={styles.buttonMap}
                  onPress={() => navigation.navigate('Shoulders', { screenTitle: 'Shoulders' })}
                >
                  <Text style={styles.buttonTextMap}>Shoulders</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainerMaptriceps}>
                <TouchableOpacity
                  style={styles.buttonMap}
                  onPress={() => navigation.navigate('Triceps', { screenTitle: 'Triceps' })}
                >
                  <Text style={styles.buttonTextMap}>Tri</Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.buttonContainerMapbiceps}>
                <TouchableOpacity
                  style={styles.buttonMap}
                  onPress={() => navigation.navigate('Biceps', { screenTitle: 'Biceps' })}
                >
                  <Text style={styles.buttonTextMap}>Bi</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainerMapabs}>
                <TouchableOpacity
                  style={styles.buttonMap}
                  onPress={() => navigation.navigate('Abs', { screenTitle: 'Abs' })}
                >
                  <Text style={styles.buttonTextMap}>Abs</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainerMapglutes}>
                <TouchableOpacity
                  style={styles.buttonMap}
                  onPress={() => navigation.navigate('Glutes', { screenTitle: 'Glutes' })}
                >
                  <Text style={styles.buttonTextMap}>Glutes</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainerMapquads}>
                <TouchableOpacity
                  style={styles.buttonMap}
                  onPress={() => navigation.navigate('Quads', { screenTitle: 'Quads' })}    
                >
                  <Text style={styles.buttonTextMap}>Quads</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainerMaphams}>
                <TouchableOpacity
                  style={styles.buttonMap}
                  onPress={() => navigation.navigate('Hamstrings', { screenTitle: 'Hamstrings' })}
                >
                  <Text style={styles.buttonTextMap}>Hams</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainerMapcalfs}>
                <TouchableOpacity
                  style={styles.buttonMap}
                  onPress={() => navigation.navigate('Calfs', { screenTitle: 'Calfs' })}
                >
                  <Text style={styles.buttonTextMap}>Calfs</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonContainerMapchest}>
                <TouchableOpacity
                  style={styles.buttonMap}
                  onPress={() => navigation.navigate('Chest', { screenTitle: 'Chest' })}
                >
                  <Text style={styles.buttonTextMap}>Chest</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
  


  function ChestScreen({ route, navigation }) {
    const { screenTitle } = route.params;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Button
            title="Hypertrophy or Strength?"
            onPress={() => navigation.navigate('Workout', { screenTitle: 'Workout' })}
          />
          <Text style={styles.texthead}>Bench Press</Text>
          <Text style={styles.textchest}>
            &#8226; Lie flat on a bench with your feet firmly planted on the ground and your back, shoulders, and head in contact with the bench.
            {"\n"}
            &#8226; Grasp the barbell with an overhand grip, slightly wider than shoulder-width apart.
            {"\n"}
            &#8226; Lift the barbell off the rack and position it directly above your chest with your arms fully extended.
            {"\n"}
            &#8226; Lower the barbell slowly towards your chest, maintaining control and keeping your elbows at a 45-degree angle.
            {"\n"}
            &#8226; Once the barbell lightly touches your chest, push it back up by extending your arms, while keeping your feet grounded and your back pressed against the bench.
            {"\n"}
            &#8226; Repeat for the desired number of repetitions, maintaining proper form throughout the exercise.
          </Text>
          <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.Image} />
            <Text style={styles.text}>Bench Press</Text>
          </View>
          <Text style={styles.texthead}>Push Up</Text>
          <Text style={styles.textchest}>
            &#8226; Start in a high plank position with your hands placed slightly wider than shoulder-width apart, fingers pointing forward.
            {"\n"}
            &#8226; Keep your body in a straight line from head to heels, engaging your core muscles.
            {"\n"}
            &#8226; Lower your body towards the ground by bending your elbows, while keeping them close to your sides.
            {"\n"}
            &#8226; Continue lowering until your chest or chin lightly touches the floor, or you reach a comfortable range of motion.
            {"\n"}
            &#8226; Push through your palms to extend your arms and raise your body back up to the starting position.
            {"\n"}
            &#8226; Maintain a controlled and steady pace throughout the exercise, focusing on proper form and engaging the target muscles.
            {"\n"}
            &#8226; Repeat for the desired number of repetitions.
          </Text>
          <Image
            source={require('@assets/images/pushup.jpg')}
            className={"w-[-100] h-[400] my-[20]"}
          />
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </ScrollView>
      </View>
    );
  }
  

function BackScreen({route, navigation}) {
    const {screenTitle} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.textchest}>Pull Ups</Text>
            <Text style={styles.textchest}>Lat PullDown</Text>
            <Text style={styles.textchest}>MTS Row</Text>
            <Text style={styles.textchest}>MTS High Row</Text>
            <Text style={styles.textchest}>Read Deltoid</Text>
            <Text style={styles.titleMap}>More info soon!</Text>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </View>
    );
}

function ShouldersScreen({route, navigation}) {
    const {screenTitle} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.textchest}>Lateral Raise</Text>
            <Text style={styles.textchest}>Shoulder Press</Text>
            <Text style={styles.textchest}>Shoulder Fly</Text>
            <Text style={styles.textchest}>Dumbell Shoulder Press</Text>
            <Text style={styles.textchest}>Dumbell Shrug</Text>
            <Text style={styles.titleMap}>More info soon!</Text>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </View>
    );
}

function TricepsScreen({route, navigation}) {
    const {screenTitle} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Coming Soon!!!</Text>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </View>
    );
}

function BicepsScreen({route, navigation}) {
    const {screenTitle} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Coming Soon!!!</Text>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </View>
    );
}

function AbsScreen({route, navigation}) {
    const {screenTitle} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Coming Soon!!!</Text>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </View>
    );
}

function GlutesScreen({route, navigation}) {
    const {screenTitle} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Coming Soon!!!</Text>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </View>
    );
}

function QuadsScreen({ route, navigation }) {
  const { screenTitle } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <Button
          title="Hypertrophy or Strength?"
          onPress={() => navigation.navigate('Workout', { screenTitle: 'Workout' })}
        />
        <Text style={styles.texthead}>Barbell Squats</Text>
        <Text style={styles.textchest}>
          &#8226; Start by standing with your feet shoulder-width apart and the barbell resting across your upper back.
          {"\n"}
          &#8226; Engage your core and keep your back straight as you lower your body down into a squat position, bending at the knees and hips.
          {"\n"}
          &#8226; Go as low as you can while maintaining good form, ideally until your thighs are parallel to the ground.
          {"\n"}
          &#8226; Push through your heels to return to the starting position.
          {"\n"}
          &#8226; Repeat for the desired number of repetitions.
        </Text>
        <Image
          source={require('@assets/images/barbellsquat.jpg')}
          className={"w-[-100] h-[400] my-[20]"}
        />
        <Text style={styles.texthead}>Leg Press</Text>
        <Text style={styles.textchest}>
          &#8226; Sit on the leg press machine with your feet on the footplate about shoulder-width apart.
          {"\n"}
          &#8226; Push the footplate away from you by extending your legs, but avoid locking your knees.
          {"\n"}
          &#8226; Lower the footplate back down until your knees are at a 90-degree angle.
          {"\n"}
          &#8226; Repeat for the desired number of repetitions.
        </Text>
        <Image
          source={require('@assets/images/legpress.jpg')}
          className={"w-[-100] h-[400] my-[20]"}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </ScrollView>
    </View>
  );
}


function HamstringsScreen({route, navigation}) {
    const {screenTitle} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Coming Soon!!!</Text>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </View>
    );
}

function CalfsScreen({ route, navigation }) {
  const { screenTitle } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <Button
          title="Hypertrophy or Strength?"
          onPress={() => navigation.navigate('Workout', { screenTitle: 'Workout' })}
        />
        <Text style={styles.texthead}>Calf Raises</Text>
        <Text style={styles.textchest}>
          &#8226; Find a sturdy set of stairs or a raised platform that you can use for this exercise.
          {"\n"}
          &#8226; Stand at the edge of the stairs/platform with the balls of your feet on the edge and your heels hanging off. Use a railing or wall for support and balance if needed.
          {"\n"}
          &#8226; Position your feet hip-width apart, toes pointing forward or slightly angled outward.
          {"\n"}
          &#8226; Engage your core and keep your upper body straight throughout the exercise.
          {"\n"}
          &#8226; Start with your heels in a lowered position, allowing them to drop below the level of the stairs/platform to fully stretch your calf muscles.
          {"\n"}
          &#8226; Push through the balls of your feet and raise your heels as high as possible, standing on your tiptoes. Focus on contracting your calf muscles as you lift.
          {"\n"}
          &#8226; Hold the raised position for a brief moment, squeezing your calves.
          {"\n"}
          &#8226; Slowly lower your heels back down below the level of the stairs/platform, feeling a stretch in your calves.
          {"\n"}
          &#8226; Repeat the movement for the desired number of repetitions.
        </Text>
        <Image
          source={require('@assets/images/calf.jpg')}
          className={"w-[-100] h-[300] my-[20]"}
        />
        <Text style={styles.texthead}>Seated Calf Raises</Text>
        <Text style={styles.textchest}>
          &#8226; Start by sitting on a calf raise machine or a sturdy chair/bench with your feet flat on the ground and your knees bent at a 90-degree angle. If using a machine, adjust the knee pad and weight stack according to your comfort and fitness level.
          {"\n"}
          &#8226; Place a calf raise block or a weight plate on your thighs, just above your knees. This will provide resistance during the exercise.
          {"\n"}
          &#8226; Position your feet so that the balls of your feet are resting on the edge of a raised platform or the calf raise block. Your heels should be hanging off the edge.
          {"\n"}
          &#8226; Grasp the handles or sides of the machine/chair for stability and support.
          {"\n"}
          &#8226; Start with your calves in a stretched position by allowing your heels to drop as low as possible.
          {"\n"}
          &#8226; From the stretched position, push through the balls of your feet and raise your heels as high as you can, contracting your calf muscles. Keep your core engaged throughout the movement.
          {"\n"}
          &#8226; Hold the raised position for a brief moment, squeezing your calf muscles.
          {"\n"}
          &#8226; Slowly lower your heels back down to the starting position, feeling a stretch in your calves.
          {"\n"}
          &#8226; Repeat the movement for the desired number of repetitions.
        </Text>
        <Image
          source={require('@assets/images/seatedcalf.jpg')}
          className={"w-[-100] h-[500] my-[20]"}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </ScrollView>
    </View>
  );
}


function Workout({route, navigation}) {
    const {screenTitle} = route.params;
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.text}>What training method would you like to follow?</Text>
            <Text style={styles.text}>"Hypertrophy Training" </Text>
            <Text style={styles.text}>Hypertrophy refers to the process of increasing the size and mass of cells, tissues, or organs in the body. In the context of exercise and muscle growth, hypertrophy specifically relates to the enlargement of muscle fibers. When muscles are subjected to progressive resistance training, such as weightlifting, they experience microscopic damage to the muscle fibers. In response to this damage, the body initiates a repair and adaptation process, resulting in muscle hypertrophy.</Text>
            <Text style={styles.text}>"Strength Training" </Text>
            <Text style={styles.text}>Strength training, also known as resistance training, is a form of exercise that focuses on increasing muscular strength and power. By engaging in strength training activities, individuals can enhance their ability to generate force and overcome resistance. This type of training primarily targets the neuromuscular system, aiming to optimize the coordination and recruitment of muscle fibers to produce maximal force output.</Text>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </View>
        </ScrollView>
    )
}

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer independent={true}>
          <Stack.Navigator>
              <Stack.Screen name="Muscle Map" component={MapScreen} options={{ headerShown: false }}/>
              <Stack.Screen name="Chest" component={ChestScreen} options={{ headerShown: false }}/>
              <Stack.Screen name="Back" component={BackScreen} options={{ headerShown: false }}/>
              <Stack.Screen name="Shoulders" component={ShouldersScreen} options={{ headerShown: false }}/>
              <Stack.Screen name="Triceps" component={TricepsScreen} options={{ headerShown: false }}/>
              <Stack.Screen name="Biceps" component={BicepsScreen} options={{ headerShown: false }}/>
              <Stack.Screen name="Abs" component={AbsScreen} options={{ headerShown: false }}/>
              <Stack.Screen name="Glutes" component={GlutesScreen} options={{ headerShown: false }}/>
              <Stack.Screen name="Quads" component={QuadsScreen} options={{ headerShown: false }}/>
              <Stack.Screen name="Hamstrings" component={HamstringsScreen} options={{ headerShown: false }}/>
              <Stack.Screen name="Calfs" component={CalfsScreen} options={{ headerShown: false }}/>
              <Stack.Screen name="Workout" component={Workout} options={{ headerShown: false }}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}


const imageUrl = 'https://i.pinimg.com/originals/51/1f/75/511f758a1ef6d337f075b820c4cc49de.gif';

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    image: {
      width: 200,
      height: 200,
    },
    Image: {
        width: 300,
        height: 300,
        marginVertical: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },

    //Styles for Tips Function
    container2: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    //Styles for Tips Function

    //Styles for Map Function
    scrollViewMap: {
        backgroundColor: 'white',
    },
    containerMap: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageMap: {
        width: 500,
        height: 500,
        marginVertical: 20,
    },
    titleMap: {
        color: 'black',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainerMap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonMap: {
        backgroundColor: 'rgba(255, 255, 255, 0.001)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    buttonTextMap: {
        fontSize: 20,
        color: 'rgba(0, 0, 0, 0.001)'

    },
    imageContainer: {
        position: 'relative',
      },
      
      buttonContainerMapchest: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 218,
        bottom: 230,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      },
      buttonContainerMapback: {
        position: 'absolute',
        top: 0,
        left: 210,
        right: 0,
        bottom: 230,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      },
      buttonContainerMapshoulders: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 260,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      },
      buttonContainerMaptriceps: {
        position: 'absolute',
        top: 0,
        left: 60,
        right: 0,
        bottom: 170,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      },
      buttonContainerMapbiceps: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 80,
        bottom: 170,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      },
      buttonContainerMapabs: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 218,
        bottom: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      },
      buttonContainerMapglutes: {
        position: 'absolute',
        top: 0,
        left: 210,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      },
      buttonContainerMapquads: {
        position: 'absolute',
        top: 100,
        left: 0,
        right: 218,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      },
      buttonContainerMaphams: {
        position: 'absolute',
        top: 130,
        left: 210,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      },
      buttonContainerMapcalfs: {
        position: 'absolute',
        top: 280,
        left: 210,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      },
    //Styles for Map function

    //Styles for Chest Function
    textchest: {
        color: 'black',
        textAlign: 'left',
        fontSize: 14,
        marginTop: 20,
        marginBottom: 10,
    },
    texthead: {
      color: 'black',
      textAlign: 'center',
      fontSize: 20,
      marginTop: 20,
      marginBottom: 10,
  },
    //Styles for Chest Function
});



