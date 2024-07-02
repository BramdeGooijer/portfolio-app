import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import ProjectHomePageItem from '../homePage/ProjectHomePageItem';

export default function SoftwareProjectTab({title, firstText, secondText, project, navigation}) {
    const HandleSeeMoreOnPress = (project) => {
        navigation.navigate(project);
    }

    return (
        <View style={styles.tabContainer}>
            <View style={styles.contentWrapper}>
                <View style={{flex: 1}}>
                    <Text style={styles.tabTitle}>{title}</Text>
                    <Text style={styles.tabSubtext}>
                        {firstText}
                    </Text>
                </View>
                <ProjectHomePageItem navigation={navigation} project={project}></ProjectHomePageItem>
            </View>

            <Text style={styles.tabSubtext}>
                {secondText}
            </Text>

            <TouchableOpacity style={styles.seeMoreWrapper} onPress={() => HandleSeeMoreOnPress(project)}>
                <Text style={styles.seeMoreText}>Zie meer</Text>
                <AntDesign style={styles.seeMoreArrow} name='arrowright' size={20}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        width: '100%',
        backgroundColor: '#181818',
        paddingHorizontal: 16,
        paddingVertical: 11,
        borderRadius: 10,
    },
    contentWrapper: {
        flexDirection: 'row',
        gap: 10,
    },
    tabTitle: {
        color: 'white',
        fontFamily: 'Prompt-Bold',
        fontSize: 18,
        marginBottom: 10,
    },
    tabSubtext: {
        color: 'white',
        fontFamily: 'MartelSans-SemiBold',
        lineHeight: 20,
    },

    seeMoreWrapper: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        gap: 13,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    seeMoreText: {
        color: 'white',
        fontFamily: 'MartelSans-SemiBold'
    },
    seeMoreArrow: {
        color: 'white',
    },
});