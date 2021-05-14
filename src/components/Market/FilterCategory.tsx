import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import { CategoryTypes, Colors } from 'utils/enums';

export interface FilterCategoryProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  category: number
}
 
const FilterCategory: React.FC<FilterCategoryProps> = ({category,setCategory,setSearch}) => {
  const handleSelectCategory = (categoryType: number) => {
    setCategory(categoryType);
    setSearch("");
  }
  
  return (
    <>
      <View style={styles.viewFilterCategory}>
        <Text style={styles.txtTitleCategories}>
          - CATEGORIAS -
        </Text>
        {
          category !== CategoryTypes.DEFAULT && (
            <Badge
              status="error"
              containerStyle={styles.badgeContainer}
              value={"X"}
              onPress={() => setCategory(CategoryTypes.DEFAULT)}
            />
          )
        }

      </View>
      <View style={styles.viewCategory}>
        <View style={styles.viewItemCategory}>
          <TouchableOpacity
            activeOpacity={0.2}
            style={
              category === CategoryTypes.BOOKS ? styles.touchItemCategoryHover : styles.touchItemCategory
            }
            onPress={() => handleSelectCategory(CategoryTypes.BOOKS)}
          >
            <Icon
              type="material-community"
              name="book-open"
              size={28}
              color={category === CategoryTypes.BOOKS ? Colors.WHITE : Colors.GREEN }
              // raised
            />
            <Text style={
              category === CategoryTypes.BOOKS ? styles.txtCategoryHover : styles.txtCategory
            }>
              Libros
            </Text>
          </TouchableOpacity>

        </View>
        <View style={styles.viewItemCategory}>
          <TouchableOpacity
            activeOpacity={0.2}
            style={
              category === CategoryTypes.IDEAS ? styles.touchItemCategoryHover : styles.touchItemCategory
            }
            onPress={() => handleSelectCategory(CategoryTypes.IDEAS)}
          >
            <Icon
              type="material-community"
              name="lightbulb-on-outline"
              size={28}
              color={category === CategoryTypes.IDEAS ? Colors.WHITE : Colors.GREEN }
              // raised
            />
            <Text style={
              category === CategoryTypes.IDEAS ? styles.txtCategoryHover : styles.txtCategory
            }>
              Ideas
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewItemCategory}>
          <TouchableOpacity
            activeOpacity={0.2}
            style={
              category === CategoryTypes.ARTICLES ? styles.touchItemCategoryHover : styles.touchItemCategory
            }
            onPress={() => handleSelectCategory(CategoryTypes.ARTICLES)}
          >
            <Icon
              type="material-community"
              name="cart-arrow-down"
              size={28}
              color={category === CategoryTypes.ARTICLES ? Colors.WHITE : Colors.GREEN }
              // raised
            />
            <Text style={
              category === CategoryTypes.ARTICLES ? styles.txtCategoryHover : styles.txtCategory
            }>
              Artículos
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewItemCategory}>
          <TouchableOpacity
            activeOpacity={0.2}
            style={
              category === CategoryTypes.SERVICES ? styles.touchItemCategoryHover : styles.touchItemCategory
            }
            onPress={() => handleSelectCategory(CategoryTypes.SERVICES)}
          >
            <Icon
              type="material-community"
              name="account"
              size={28}
              color={category === CategoryTypes.SERVICES ? Colors.WHITE : Colors.GREEN }
            />
            <Text style={
              category === CategoryTypes.SERVICES ? styles.txtCategoryHover : styles.txtCategory
            }>
              Servicios
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>  

  );
}
 
const styles = StyleSheet.create({
  viewFilterCategory: {

  },
  txtTitleCategories: {
    alignSelf: "center",
    textAlign: 'center',
    color: Colors.GREEN,
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10
  },
  viewCategory: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 5
  },
  viewItemCategory: {
    justifyContent: "center",
    alignItems: "center",
  },
  touchItemCategory: {
    backgroundColor: Colors.WHITE,
    height: 80,
    width: 80,
    borderRadius: 100,
    padding: 15,
    elevation: 4
  },
  touchItemCategoryHover: {
    backgroundColor: Colors.GREENLIGHT,
    height: 80,
    width: 80,
    borderRadius: 100,
    padding: 15,
    elevation: 4
  },
  txtCategory: {
    color: Colors.GREEN,
    marginTop: 5,
    textAlign: "center",
    fontSize: 11
  },
  txtCategoryHover: {
    color: Colors.WHITE,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
    fontSize: 11
  },
  badgeContainer: {
    position: "absolute",
    top: 14,
    right: "25%"
  }
})

export default FilterCategory;
