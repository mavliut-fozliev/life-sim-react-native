import React, {useState, useEffect, useMemo, useRef} from 'react';
import {StyleSheet, View, Animated, Dimensions} from 'react-native';
import TopBar from './src/TopBar/TopBar';
import useZustand from '../storage/zustand';
import Menu from './src/pages/Menu/Menu';
import StartNewLife from './src/pages/Menu/src/StartNewLife/StartNewLife';
import Settings from './src/pages/Menu/src/Settings/Settings';
import {colors} from '../consts/styles';
// import {Page, pageStructure} from '../consts/pages';
import Home from './src/pages/Menu/src/Home/Home';
import PageSkeleton from './src/PageSkeleton/PageSkeleton';

type UIProps = {};

// type AnimationProps = {
//   onAnimation: boolean;
//   prevPage: Page;
//   nextPage: Page;
//   translate: string;
// };

const pageComponents: Record<string, React.JSX.Element> = {
  skeleton: <PageSkeleton />,
  menu: <Menu />,
  menu_home: <Home />,
  menu_startNewLife: <StartNewLife />,
  menu_settings: <Settings />,
};

// const {width} = Dimensions.get('window');

function UI({}: UIProps): React.JSX.Element {
  const {currentPage} = useZustand();

  // const [activePage, setActivePage] = useState<Page>(pageStructure.menu);

  // const [animationProps, setAnimationProps] = useState<AnimationProps>({
  //   onAnimation: false,
  //   prevPage: pageStructure.skeleton,
  //   nextPage: pageStructure.skeleton,
  //   translate: 'right',
  // });

  // const translateX = useRef(new Animated.Value(0)).current;

  // // useEffect(() => {
  // //   if (currentPage.title === activePage.title) {
  // //     return;
  // //   }

  // //   const returnBack = activePage.parentTitle === currentPage.title;

  // //   const newAnimationProps = {
  // //     onAnimation: true,
  // //     prevPage: returnBack ? currentPage : activePage,
  // //     nextPage: returnBack ? activePage : currentPage,
  // //     translate: returnBack ? 'left' : 'right',
  // //   };

  // //   if (JSON.stringify(newAnimationProps) !== JSON.stringify(animationProps)) {
  // //     setAnimationProps(newAnimationProps);
  // //   }
  // // }, [currentPage, activePage, animationProps]);

  // // useEffect(() => {
  // //   const translate = animationProps.translate === 'right' ? -1 : 0;

  // //   Animated.timing(translateX, {
  // //     toValue: translate * width,
  // //     duration: 200,
  // //     useNativeDriver: true,
  // //   }).start(() => {
  // //     if (activePage.title !== currentPage.title) {
  // //       setActivePage(currentPage);
  // //     }

  // //     if (animationProps.onAnimation) {
  // //       setAnimationProps({
  // //         onAnimation: false,
  // //         prevPage: pageStructure.skeleton,
  // //         nextPage: pageStructure.skeleton,
  // //         translate: 'right',
  // //       });
  // //     }
  // //   });
  // // }, [animationProps]);

  return (
    <View style={styles.box}>
      <TopBar />
      {/* {animationProps.onAnimation ? (
        <Animated.View style={[styles.content, {transform: [{translateX}]}]}>
          <PageSkeleton>{pageComponents[animationProps.prevPage.title]}</PageSkeleton>
          <PageSkeleton>{pageComponents[animationProps.nextPage.title]}</PageSkeleton>
        </Animated.View>
      ) : ( */}
      {pageComponents[currentPage.title]}
      {/* <PageSkeleton></PageSkeleton> */}
      {/* )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.background.primary,
  },
  content: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
});

export default UI;
