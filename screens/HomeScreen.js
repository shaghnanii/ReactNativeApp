const HomeScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s HOME</Text>;
};

export default HomeScreen;