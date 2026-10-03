import { TouchableOpacity, View, Text } from "react-native";

interface CheckboxProps {
    label: string;
    checked: boolean;
    onToggle: () => void;
    activeColor?: string;
    textSize?: number;
    testID?: string;
}

export default function Checkbox({
                                     label,
                                     checked,
                                     onToggle,
                                     activeColor = '#3ad5ec',
                                     textSize = 13,
                                     testID,
                                 }: CheckboxProps) {
    return (
        <TouchableOpacity
            testID={testID}
            className="flex-row items-center"
            onPress={onToggle}
        >
            <View
                className="w-[18px] h-[18px] border rounded-[4px] mr-2 items-center justify-center"
                style={{
                    backgroundColor: checked ? activeColor : 'transparent',
                    borderColor: checked ? activeColor : '#999999',
                }}
            >
                {checked && (
                    <Text className="text-white text-[12px] font-bold">
                        ✓
                    </Text>
                )}
            </View>

            <Text
                className="text-[#333333]"
                style={{ fontSize: textSize }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
}
