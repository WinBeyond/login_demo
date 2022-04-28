
import Typography from "@material-ui/core/Typography/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import { Form } from "formik";
import { palette, spacing } from "../../styles/accessors";
import { WrapperFlex } from "../../components/Wrapper/styles";
import styled from "../../styles/styled-components";
import { Button } from "../../components/Base/Buttons/Button/template";
import theme from "../../styles/theme";

// security 

export const SCTypography = styled(Typography)`
  height: 100%;
`;


export const SCTabs = styled(Tabs)`
  &&{
    background: ${palette("primary")("blue3")}; 
  }
`;

export const SCTab = styled(Tab)`
&& {
  background: ${palette("primary")("blue3")}; 
}
`;

export const SCWrapperFlex = styled(WrapperFlex)`
  padding: ${spacing(2)}px ${spacing(2)}px ${spacing(2)}px  0; 
  background: transparent;  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
`;




export const SCFormContainer = styled(Box)`
  &&{ 
    padding: ${spacing(4)}px; 
    align-items: flex-start; 
    display: flex;
    flex-direction: column;
    margin: 0 ${spacing(1)}px;  
    background: white;
  }
`;

export const SCFormContainer1 = styled(Box)`
  &&{ 
    padding: ${spacing(4)}px; 
    align-items: flex-start; 
    display: flex;
    flex-direction: column;
    margin: 0 ${spacing(1)}px;  
    background: white;
  }
`;


export const SCProfileCardContent = styled(Box)` 
&&{
  padding: ${spacing(1)}px; 
  background: ${palette("primary")("blue3")};
  flex-direction: column;
  flex: 1;
  flex-grow: 1;
  border: 1px xoldi red;
}
`;

export const SCProfileCardContent1 = styled(Box)` 
&&{
  padding: ${spacing(1)}px; 
  background: ${palette("primary")("blue3")};
  flex-direction: column;
  flex: 1;
  flex-grow: 1;
  border: 1px xoldi red;
}
`;

export const SCAvatar = styled(Avatar)` 
&&{
  width: 100px;
  height: 100px;
  margin-bottom: ${spacing(2)}px; 
}
`;

export const SCAvatar1 = styled(Avatar)` 
&&{
  width: 100px;
  height: 100px;
  margin-bottom: ${spacing(2)}px; 
}
`;

export const SCAvatar2 = styled(Avatar)` 
&&{
  width: 100px;
  height: 100px;
  margin-bottom: ${spacing(2)}px; 
}
`;

export const SCCardContent = styled(CardContent)` 
&&{
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${spacing(4)}px;  
}
`;

export const SCLowerCardContent = styled(CardContent)` 
&& {
  align-self: flex-start;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 100px; 
}
`;


export const SCLowerCardContent1 = styled(CardContent)` 
&& {
  align-self: flex-start;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 100px; 
}
`;



export const SCTypographyName = styled(Typography)` 
&&{
  color: rgb(46, 56, 77); 
  font-size: 24px;
  font-weight: normal;
  height: 32px;
  letter-spacing: 0px;
  line-height: 32px;
  text-align: center; 
  text-transform: capitalize;
}
`;

export const SCTypographyRole = styled(Typography)` 
&&{
  color: rgb(135, 152, 173); 
  font-size: 15px;
  height: 22px;
  letter-spacing: 0px;
  line-height: 22px;
  text-align: center; 
}
`;

export const SCTypographyLabel = styled(Typography)` 
&&{
  color: rgb(176, 186, 201); 
  font-size: 12px;
  font-weight: 500;
  height: 14px;
  letter-spacing: 1.13px;
  text-transform: uppercase; 
}
`;

export const SCTypographyText = styled(Typography)` 
&&{
  color: rgb(46, 56, 77); 
  font-size: 15px;
  height: 22px;
  letter-spacing: 0px;
  line-height: 22px; 
  margin-bottom: 8px;
}
`;

export const SCButton = styled(Button)`
  && {
    margin-top: ${spacing(4)}px;
  }
`;

export const SCForm = styled(Form)`
  && {
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 300px;
    justify-content: space-evenly;
  }
`;

export const SCModalActions = styled(WrapperFlex)`
  justify-content: flex-end;
  margin-top: ${spacing(4)}px;

  && {
    button {
      margin: 0;
    }
    button:last-child {
      margin-left: ${spacing(1)}px;
    }
  }
`;

export const SCBox = styled(Box)`
  &&{
    min-width: 340px;
    padding: ${spacing(2)}px; 
    background: ${palette("primary")("white")};
    flex-direction: column;
    box-shadow: 0px 10px 20px 0px rgba(46,91,255,0.07);
    justify-content: flex-start;
    align-items: center;
    display: flex;
  }
`;

export const SCBox2 = styled(Box)`
  &&{
    min-width: 340px;
    padding: ${spacing(2)}px; 
    background: ${palette("primary")("white")};
    flex-direction: column;
    box-shadow: 0px 10px 20px 0px rgba(46,91,255,0.07);
    justify-content: flex-start;
    align-items: center;
    display: flex;
  }
`;

export const SCBoxText = styled(Box)` 
  padding: ${spacing(1)}px; 
  background: ${palette("primary")("blue3")};
  flex-direction: column;
`;

export const SCBoxData = styled(Box)` 
&&{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; 
  min-height: 150px;
  align-content: space-around;
  width: 100%;
  flex-direction: column;
}
`;

export const SCActionsBox = styled(Box)` 
&& {
  display: flex;
}
`;








export const SCFormFieldError = styled.div`
  text-align: right;
  color: ${theme.palette.notifications.error};
`;

