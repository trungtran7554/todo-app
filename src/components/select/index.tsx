import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, useColorScheme } from 'react-native';
import { styleDark, styleDefault, styleLight } from './styles';

interface SelectProps {
  onChange: (value: string) => void;
  value: string;
  option: any[];
}

const Select: React.FC<SelectProps> = ({ onChange, value, option }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(value);
  const isDarkMode = useColorScheme() === 'dark';

  const styles = isDarkMode ? styleDark : styleLight;

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    toggleModal();
    onChange(value)
  };
  
  return (
    <View style={styleDefault.container}>
      <TouchableOpacity onPress={toggleModal} style={styleDefault.selectBtn}>
        <Text style={styleDefault.selectTxt}>{option.find((v) => v.key === selectedValue).name}</Text>
      </TouchableOpacity>
      <Modal visible={isVisible} transparent animationType="fade">
        <View style={styleDefault.modalContainer}>
          <View style={styleDefault.modalContent}>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styleDefault.closeBtn}>Close</Text>
            </TouchableOpacity>
            {option.map((v, i) => (
              <TouchableOpacity style={styleDefault.options} key={i} onPress={() => handleSelect(v.key)}>
                <Text style={[v.key === selectedValue && styleDefault.selectTxt]}>{v.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Select;
