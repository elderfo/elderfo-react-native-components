import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf, action, linkTo,  } from '@kadira/react-native-storybook';

import { BusyModal, CenterView, Platform } from '../';

storiesOf('BusyModal', module)
  .addDecorator(getStory => (
    <View style={{ flex: 1, paddingTop: Platform.ios ? 20 : 0 }}>
      <Text>
        Bacon ipsum dolor amet hamburger beef brisket, salami short loin cow chuck beef ribs pork chop kielbasa. Frankfurter burgdoggen venison alcatra jerky. Venison short ribs cupim, beef sausage fatback chicken chuck shank biltong. Rump bacon prosciutto chicken, boudin tail shank beef. Shoulder pastrami kevin meatball frankfurter, short loin sausage t-bone doner spare ribs landjaeger leberkas.
      </Text>
      <Text>
        Chuck shank fatback brisket leberkas turducken beef salami filet mignon tail pork meatloaf. Kielbasa jowl rump turducken t-bone fatback pork belly swine tri-tip. Chicken corned beef pig andouille cupim leberkas. Ribeye ham pig rump kevin andouille ham hock, chuck bresaola. Burgdoggen kielbasa filet mignon shank. Chicken beef tri-tip biltong. Burgdoggen ham hock venison flank, shank boudin meatball turducken short loin corned beef drumstick cupim bresaola.
      </Text>
      <Text>
        Frankfurter boudin flank, salami jowl sirloin chicken ham sausage. Shankle landjaeger doner pork chop shank. Boudin cow pork chop, capicola flank meatloaf spare ribs tri-tip ribeye venison fatback. Alcatra doner ground round chuck porchetta, boudin burgdoggen venison strip steak sirloin ham hock picanha. Ham hock beef sausage pork landjaeger cow porchetta swine andouille pork chop tail fatback meatloaf. Kevin prosciutto picanha, venison porchetta short loin sirloin beef ribs ball tip turkey shoulder flank pig. Shoulder jowl kevin, tail pastrami frankfurter ribeye tenderloin jerky pork belly.
      </Text>
      <Text>
        Pork leberkas beef t-bone meatball, pork loin flank boudin. Corned beef short loin pork loin brisket pork belly kielbasa, ham shank sirloin drumstick. Hamburger bresaola capicola kevin fatback frankfurter pancetta alcatra biltong tenderloin pig ham hock sausage strip steak. T-bone chicken pork belly tri-tip bresaola porchetta shank prosciutto venison meatloaf. Tenderloin salami ball tip frankfurter turkey short loin drumstick t-bone corned beef. Tail chicken pancetta prosciutto. Andouille cow pork chop, turkey ham filet mignon alcatra chuck hamburger corned beef venison.
      </Text>
      {getStory()}
    </View>
  ))
  .add('open', () => (
    <BusyModal isOpen={true} />
  ))
  .add('closed', () => (
    <BusyModal isOpen={false} />
  ))
  .add('open with message', () => (
    <BusyModal message={'Leave me alone, I\'m busy'} isOpen={true} />
  ))
  .add('open with spinner color', () => (
    <BusyModal spinnerColor={'red'} isOpen={true} />
  ));
