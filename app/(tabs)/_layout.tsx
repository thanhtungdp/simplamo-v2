import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import React from 'react';


export default function TabLayout() {

  return (
    <NativeTabs>
      <NativeTabs.Trigger 
        name="index"
      >
        <Label>Inbox</Label>
        <Icon sf="house.fill" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger 
        name="explore"
      >
        <Label>Activity</Label>
        <Icon sf="paperplane.fill" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger 
        name="profile"
      >
        <Label>Profile</Label>
        <Icon sf="person.fill" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
       <NativeTabs.Trigger 
        name="more"
      >
        <Label>More</Label>
        <Icon sf="person.fill" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
