import React from "react";
import { Modal, View, StyleSheet } from "react-native";

const ModalContainer: React.FC<{
  isVisible: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}> = ({ isVisible, onRequestClose, children }) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      onRequestClose={onRequestClose}
    >
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
});

export default ModalContainer;
