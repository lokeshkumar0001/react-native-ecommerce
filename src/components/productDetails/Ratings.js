import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Rating = ({ rating }) => {
  const renderStar = (index) => {
    const filledStars = Math.floor(rating); // Whole stars
    const remainder = rating - filledStars; // Decimal part for half star

    let starName = 'md-star-outline';
    if (index + 1 <= filledStars) {
      starName = 'md-star';
    } else if (remainder < 1) {
      starName = 'md-star-half';
    }

    return (
      <Ionicons
        key={index}
        name={starName}
        size={20}
        color="#F9B023" // You can customize the color
        style={{ marginRight: 5 }}
      />
    );
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {[...Array(5)].map((_, index) => renderStar(index))}
    </View>
  );
};

export default Rating;
