import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ImageList from "../dragdrop/imageList";
import { useAppSelector, useAppDispatch } from '../../store/hook';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    display: 'flex',
  },
  imageList: {
    width : 120, 
    height : 120
  }, 
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(30% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}),
);

interface Props {
  /**
  * Injected by the documentation to work in an iframe.
  * You won't need it on your project.
  */
  window?: () => Window;
  images?: [];
}

export function ResponsiveDrawer(props: Props) {
  
  const { window , images} = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  let imagesdata=[];
  let data = useAppSelector((state: any) => state);
  imagesdata = data?.toolBar?.imageAsset?.images;
   
  if (data === undefined)
  {
    imagesdata = [];
  }
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const drawer = (
    <div>
    <div className={classes.toolbar} />
    <Divider />
    
    <Accordion expanded={true}>
    <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1a-content"
    id="panel1a-header"
    >
    <Typography className={classes.heading}>Image Library</Typography>
    </AccordionSummary>
    <AccordionDetails>
    <ImageList images={imagesdata} style={{width : 120, height : 120}} />
    <Typography>
    
    </Typography>
    </AccordionDetails>
    </Accordion>
    <Accordion>
    <AccordionSummary 
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel2a-content"
    id="panel2a-header"
    >
    <Typography className={classes.heading}>Default Template</Typography>
    </AccordionSummary>
    <AccordionDetails>
    <Typography>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.
    </Typography>
    </AccordionDetails>
    </Accordion>
    
    </div>
    );
    
    const container = window !== undefined ? () => window().document.body : undefined;
    
    return (
      <div className={classes.root}>
      <CssBaseline />
      
      <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
      <Drawer
      container={container}
      variant="temporary"
      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
      open={mobileOpen}
      onClose={handleDrawerToggle}
      classes={{
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      >
      {drawer}
      </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
      <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
      open
      >
      {drawer}
      </Drawer>
      </Hidden>
      </nav>
      <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
       Development canvas
      </Typography>
      <Typography paragraph>
       Development canvas
      </Typography>
      </main>
      </div>
      );
    }
    