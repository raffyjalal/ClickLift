import { Image } from 'react-native';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

function Slideshow(){
    useEffect(() => {
        let i = 0;
        const imageSlideshow = [
            require('./assets/consistency.jpeg'),
            require('./assets/Efforts.jpeg'),
            require('./assets/happy.jpeg'),
            require('./assets/progress.jpeg'),
            require('./assets/questions.jpg'),
            require('./assets/rest.jpg')
        ];
        const time = 3500;

        function changeImg(){
            document.slide.src = imageSlideshow[i].uri;

            // Check If Index Is Under Max
            if(i < imageSlideshow.length - 1){
              // Add 1 to Index
              i++; 
            } else { 
                // Reset Back To O
                i = 0;
            }

            // Run function every x seconds
            setTimeout(changeImg, time);
        }

        changeImg();
    }, []);

    return (
        <View>
            <Image name="slide" />
        </View>
    );
}
