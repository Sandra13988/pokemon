import { useState, useEffect } from 'react';
import todosTipos from './todosTipos.json'

export function getMultipliers(types) {
    const [multipliers, setMultipliers] = useState({
        defense: {},
        attack: {}
    });

    useEffect(() => {
        const newMultipliers = {
            defense: {},
            attack: {}
        };

        types.forEach((type) => {
            const damageRelations = todosTipos[type];
            const noDamageTo = damageRelations.attack.zero;
            const noDamageFrom = damageRelations.defense.zero;
            const halfDamageTo = damageRelations.attack.half;
            const halfDamageFrom = damageRelations.defense.half;
            const doubleDamageTo = damageRelations.attack.double;
            const doubleDamageFrom = damageRelations.defense.double;

            noDamageTo.forEach((type) => {
                if (newMultipliers.attack.hasOwnProperty(type)) {
                    newMultipliers.attack[type] *= 0;
                } else {
                    newMultipliers.attack[type] = 0;
                }
            });

            noDamageFrom.forEach((type) => {
                if (newMultipliers.defense.hasOwnProperty(type)) {
                    newMultipliers.defense[type] *= 0;
                } else {
                    newMultipliers.defense[type] = 0;
                }
            });

            halfDamageTo.forEach((type) => {
                if (newMultipliers.attack.hasOwnProperty(type)) {
                    newMultipliers.attack[type] *= 0.5;
                } else {
                    newMultipliers.attack[type] = 0.5;
                }
            });

            halfDamageFrom.forEach((type) => {
                if (newMultipliers.defense.hasOwnProperty(type)) {
                    newMultipliers.defense[type] *= 0.5;
                } else {
                    newMultipliers.defense[type] = 0.5;
                }
            });

            doubleDamageTo.forEach((type) => {
                if (newMultipliers.attack.hasOwnProperty(type)) {
                    newMultipliers.attack[type] *= 2;
                } else {
                    newMultipliers.attack[type] = 2;
                }
            });

            doubleDamageFrom.forEach((type) => {
                if (newMultipliers.defense.hasOwnProperty(type)) {
                    newMultipliers.defense[type] *= 2;
                } else {
                    newMultipliers.defense[type] = 2;
                }
            });
        });

        setMultipliers(newMultipliers);
    }, [types]);

    return multipliers;
}


