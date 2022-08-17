import { View, Image, Text } from "react-native";
import { photoCardStyles } from "../assets/styles";
import { Avatar, Icon } from "react-native-elements";

function PhotoCard({ photo }) {
  const BASE_URL = "https://source.unsplash.com/random?miami=";

  return (
    <>
      <View style={photoCardStyles.cardContainer}>
        <View style={photoCardStyles.cardHeader}>
          {/* avatar */}
          <Avatar
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          />

          <View style={photoCardStyles.cardHeaderText}>
            <Text> D.J. Khaled </Text>
            <Text style={photoCardStyles.cardLocation}> Miami </Text>
          </View>
        </View>
        <Icon name="code" />
      </View>

      <Image source={{ uri: BASE_URL + 1 }} style={photoCardStyles.cardImage} />
      <Text style={photoCardStyles.cardText}>
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
        veritatis dolor nesciunt deleniti aspernatur blanditiis quis ipsum esse
        eum tempore. Est explicabo accusamus, ipsum asperiores aliquid
        laboriosam. Numquam, iusto consectetur!{" "}
      </Text>
    </>
  );
}

export default PhotoCard;
