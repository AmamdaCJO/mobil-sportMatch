import React from 'react';
import {View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import EquipmentBanner from "@/components/inicio/EquipmentBanner";
import {colors} from "@/theme";
import TournamentCTA from "@/components/inicio/TournamentCTA";
import PromoBanner from "@/components/inicio/PromoBanner";
import NextEventCard from "@/components/inicio/NextEventCard";
import {MOCK_PROXIMO_EVENTO} from "@/mocks";
import RecommendedRoutes from "@/components/inicio/RecommendedRoutes";


export default function HomeDummyScreen() {
    return (
        <SafeAreaView
            className="flex-1"
            style={{backgroundColor: colors.ui.backgroundLight}}
        >
            <ScrollView
                className="flex-1 px-4 pt-4"
                showsVerticalScrollIndicator={false}
            >
                <EquipmentBanner/>
                <NextEventCard event={MOCK_PROXIMO_EVENTO}/>
                <TournamentCTA/>
                <RecommendedRoutes/>
                <PromoBanner/>

                <View className="h-10"/>
            </ScrollView>
        </SafeAreaView>
    );
}