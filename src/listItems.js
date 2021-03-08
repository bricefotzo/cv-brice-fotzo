import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';



export default function MainListItems() {
  const { t } = useTranslation();
  return (
  
    <div>
      <ListItem button>
        <ListItemIcon>
          <SettingsApplicationsRoundedIcon />
        </ListItemIcon>
        <a href="#skills"><ListItemText primary={t("skill-item")} /></a>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <WorkRoundedIcon />
        </ListItemIcon>
        <a href="#experience"><ListItemText primary={t("exp-item")}  /></a>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ContactMailRoundedIcon />
        </ListItemIcon>
        <a href="#contact"><ListItemText primary={t("contact")} /></a>
      </ListItem>
      {/* <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary= />
      </ListItem> */}
      {/* <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem> */}
    </div>
  )
} 

