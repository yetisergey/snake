import React from 'react';
import Controller from './Controller'


const Controllers = () => (
<ul>
    <Controller action="SNAKE_UP" text="UP"/>
    <Controller action="SNAKE_RIGHT" text="RIGHT"/>
    <Controller action="SNAKE_LEFT" text="LEFT"/>
    <Controller action="SNAKE_DOWN" text="DOWN"/>
</ul>
)

export default Controllers