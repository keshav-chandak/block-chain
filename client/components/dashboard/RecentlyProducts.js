import React, { PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { grey400, cyan600, white } from 'material-ui/styles/colors';
import { typography } from 'material-ui/styles';
import Wallpaper from 'material-ui/svg-icons/device/wallpaper';

class OrderDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var paperSettings = {
      clickable: true,
      liftOnHover: true,
      liftOnClick: true,
      zDepth: 1
    }
    let data = [];
    if (typeof this.props.data !== 'undefined' && this.props.data.length > 0) {
      data = this.props.data.slice(0, 4);
    }
    console.log(data,this.props);
    const styles = {
      subheader: {
        fontSize: 24,
        fontWeight: typography.fontWeightLight,
        backgroundColor: cyan600,
        color: white
      }
    };

    const iconButtonElement = (
      <IconButton
        touch={true}
        tooltipPosition="bottom-left"
      >
        <MoreVertIcon color={grey400} />
      </IconButton>
    );

    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>View</MenuItem>
      </IconMenu>
    );
    return (
      <Paper settings={paperSettings}>
        <List>
          <Subheader style={styles.subheader}>Recent Transfer Details</Subheader>
          {
            data.map(item =>
              <div key={item.index}>
                <ListItem
                  leftAvatar={<Avatar icon={<Wallpaper />} />}
                  primaryText={"$"+item.amount+"     Transfered from "+item.fromFund+" To "+ item.toFund}
                  secondaryText={item.timestamp}
                  rightIconButton={rightIconMenu}
                />
                <Divider inset={true} />
              </div>
            )}
        </List>
      </Paper>
    );
  };
}



OrderDetails.propTypes = {
  data: PropTypes.array
};

export default OrderDetails;
