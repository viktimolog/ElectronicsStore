import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View } from 'react-native'
import Item from './Item'

const ItemsList = ({items, navigate, setCurItem}) => (
        <ScrollView>
          {
            items.map(item =>
              <Item
                item={item}
                key={item.id}
                navigate = {navigate}
                setCurItem = {setCurItem}
              />
            )
          }
        </ScrollView>
      )
export default ItemsList

ItemsList.propTypes = {
items: PropTypes.array.isRequired,
navigate: PropTypes.func.isRequired,
setCurItem: PropTypes.func.isRequired
}
