import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf, action, linkTo, } from '@kadira/react-native-storybook';

import { Container, Header } from '../';

storiesOf('Container', module)
    .add('without a header', () => (
        <Container>
            {shortFillerText}
        </Container>
    ))
    .add('with a header', () => (
        <Container>
            <Header>
                <Text>Title</Text>
            </Header>
            {shortFillerText}
        </Container>
    ))
    .add('with style and contentStyle', () => (
        <Container
            style={{ backgroundColor: 'red', padding: 25, paddingTop: 25 }}
            contentStyle={{ backgroundColor: 'green' }}>
            {shortFillerText}
        </Container>
    ))
    .add('without a header and scrolls', () => (
        <Container scroll={true}>
            {fillerText}
        </Container>
    ))
    .add('with a header and scroll', () => (
        <Container scroll={true}>
            <Header>
                <Text>Header</Text>
            </Header>
            {fillerText}
        </Container>
    ))
    .add('with style, contentStyle and scroll', () => (
        <Container
            scroll={true}
            style={{ backgroundColor: 'red', padding: 25, paddingTop: 25 }}
            contentStyle={{ backgroundColor: 'green' }}>
            {fillerText}
        </Container>
    ))
    ;

const shortFillerText = (
    <Text>
        Bacon ipsum dolor amet hamburger beef brisket, salami short loin cow chuck beef ribs pork chop kielbasa. Frankfurter burgdoggen venison alcatra jerky. Venison short ribs cupim, beef sausage fatback chicken chuck shank biltong. Rump bacon prosciutto chicken, boudin tail shank beef. Shoulder pastrami kevin meatball frankfurter, short loin sausage t-bone doner spare ribs landjaeger leberkas.
    </Text>
);

const fillerText = (
    <View>
        <Text>
            Bacon ipsum dolor amet hamburger beef brisket, salami short loin cow chuck beef ribs pork chop kielbasa. Frankfurter burgdoggen venison alcatra jerky. Venison short ribs cupim, beef sausage fatback chicken chuck shank biltong. Rump bacon prosciutto chicken, boudin tail shank beef. Shoulder pastrami kevin meatball frankfurter, short loin sausage t-bone doner spare ribs landjaeger leberkas.
        </Text>
        <Text>&nbsp;</Text>
        <Text>
            Chuck shank fatback brisket leberkas turducken beef salami filet mignon tail pork meatloaf. Kielbasa jowl rump turducken t-bone fatback pork belly swine tri-tip. Chicken corned beef pig andouille cupim leberkas. Ribeye ham pig rump kevin andouille ham hock, chuck bresaola. Burgdoggen kielbasa filet mignon shank. Chicken beef tri-tip biltong. Burgdoggen ham hock venison flank, shank boudin meatball turducken short loin corned beef drumstick cupim bresaola.
        </Text>
        <Text>&nbsp;</Text>
        <Text>
            Frankfurter boudin flank, salami jowl sirloin chicken ham sausage. Shankle landjaeger doner pork chop shank. Boudin cow pork chop, capicola flank meatloaf spare ribs tri-tip ribeye venison fatback. Alcatra doner ground round chuck porchetta, boudin burgdoggen venison strip steak sirloin ham hock picanha. Ham hock beef sausage pork landjaeger cow porchetta swine andouille pork chop tail fatback meatloaf. Kevin prosciutto picanha, venison porchetta short loin sirloin beef ribs ball tip turkey shoulder flank pig. Shoulder jowl kevin, tail pastrami frankfurter ribeye tenderloin jerky pork belly.
        </Text>
        <Text>&nbsp;</Text>
        <Text>
            Pork leberkas beef t-bone meatball, pork loin flank boudin. Corned beef short loin pork loin brisket pork belly kielbasa, ham shank sirloin drumstick. Hamburger bresaola capicola kevin fatback frankfurter pancetta alcatra biltong tenderloin pig ham hock sausage strip steak. T-bone chicken pork belly tri-tip bresaola porchetta shank prosciutto venison meatloaf. Tenderloin salami ball tip frankfurter turkey short loin drumstick t-bone corned beef. Tail chicken pancetta prosciutto. Andouille cow pork chop, turkey ham filet mignon alcatra chuck hamburger corned beef venison.
        </Text>
        <Text>
            Bacon ipsum dolor amet hamburger beef brisket, salami short loin cow chuck beef ribs pork chop kielbasa. Frankfurter burgdoggen venison alcatra jerky. Venison short ribs cupim, beef sausage fatback chicken chuck shank biltong. Rump bacon prosciutto chicken, boudin tail shank beef. Shoulder pastrami kevin meatball frankfurter, short loin sausage t-bone doner spare ribs landjaeger leberkas.
        </Text>
        <Text>&nbsp;</Text>
        <Text>
            Chuck shank fatback brisket leberkas turducken beef salami filet mignon tail pork meatloaf. Kielbasa jowl rump turducken t-bone fatback pork belly swine tri-tip. Chicken corned beef pig andouille cupim leberkas. Ribeye ham pig rump kevin andouille ham hock, chuck bresaola. Burgdoggen kielbasa filet mignon shank. Chicken beef tri-tip biltong. Burgdoggen ham hock venison flank, shank boudin meatball turducken short loin corned beef drumstick cupim bresaola.
        </Text>
        <Text>&nbsp;</Text>
        <Text>
            Frankfurter boudin flank, salami jowl sirloin chicken ham sausage. Shankle landjaeger doner pork chop shank. Boudin cow pork chop, capicola flank meatloaf spare ribs tri-tip ribeye venison fatback. Alcatra doner ground round chuck porchetta, boudin burgdoggen venison strip steak sirloin ham hock picanha. Ham hock beef sausage pork landjaeger cow porchetta swine andouille pork chop tail fatback meatloaf. Kevin prosciutto picanha, venison porchetta short loin sirloin beef ribs ball tip turkey shoulder flank pig. Shoulder jowl kevin, tail pastrami frankfurter ribeye tenderloin jerky pork belly.
        </Text>
        <Text>&nbsp;</Text>
        <Text>
            Pork leberkas beef t-bone meatball, pork loin flank boudin. Corned beef short loin pork loin brisket pork belly kielbasa, ham shank sirloin drumstick. Hamburger bresaola capicola kevin fatback frankfurter pancetta alcatra biltong tenderloin pig ham hock sausage strip steak. T-bone chicken pork belly tri-tip bresaola porchetta shank prosciutto venison meatloaf. Tenderloin salami ball tip frankfurter turkey short loin drumstick t-bone corned beef. Tail chicken pancetta prosciutto. Andouille cow pork chop, turkey ham filet mignon alcatra chuck hamburger corned beef venison.
      </Text>
    </View>
);