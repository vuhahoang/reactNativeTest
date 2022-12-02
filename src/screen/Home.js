import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity,Image, Button} from 'react-native';
import React, { useState,Component } from "react";


export default class Home extends Component {
    render() {
        const {navigation} = this.props

        return (
            <FlexDirectionBasics2 navigation = {navigation}/>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  red: {
    color: 'red',
    fontWeight: 'bold',
    backgroundColor: 'skyblue'
  }
});

const test = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Open up App.js to start wosssssrking on yojniknjkur app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const FlexDimensionBasics = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
      <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
      <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
    </View>
  );
}

const FlexDirectionBasics2 = (props) => {
  const {navigation} = props;
  const [flexDirection, setflexDirection] = useState("column");

  return (
    <PreviewLayout
      label="flexDirection"
      values={["column", "row", "row-reverse", "column-reverse"]}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}
      navigation ={navigation}
    >
      <View
        style={[styles3.box, { backgroundColor: "powderblue" }]}
      />
      <View
        style={[styles3.box, { backgroundColor: "skyblue" }]}
      />
      <View
        style={[styles3.box, { backgroundColor: "steelblue" }]}
      />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
  navigation
}) => (
  <View style={{ padding: 10, flex: 1}}>
    <View style={{ width: '100%', height: '30%' ,display: 'flex',justifyContent: 'center',alignItems: 'center',marginBottom:20}}>
    <Image
  style = {{width:'50%',height:'50%'}}
  source={{
    uri: 'https://reactjs.org/logo-og.png',
    cache: 'only-if-cached'
  }}
/>
</View>
    <Text style={styles3.label}>{label}</Text>
    <View style={styles3.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles3.button,
            selectedValue === value && styles3.selected,
          ]}
        >
          <Text
            style={[
              styles3.buttonLabel,
              selectedValue === value && styles3.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles3.container, { [label]: selectedValue }]}>
      {children}
    </View>
    <View>
        <Button title='Bú' onPress={() => navigation.navigate('Profile')}></Button>
    </View>
  </View>
);

const Flex = () => {
  return (
    <View style={[styles2.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>
  );
};

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: '30%',
    height: '30%',
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

