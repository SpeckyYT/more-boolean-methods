require('./')();

[
    [
        'Random',
        true.random()
    ],
    [
        'Not',
        true.not()
    ],
    [
        'Stringify',
        true.stringify()
    ],
    [
        'Numberify',
        true.numberify()
    ],
    [
        'Arrayify',
        true.arrayify()
    ],
    [
        'True',
        true.true()
    ],
    [
        'False',
        true.false()
    ],
    [
        'AND',
        true.and(false)
    ],
    [
        'OR',
        true.or(false)
    ],
    [
        'EQUALS',
        true.equals(false)
    ],
    [
        'XOR',
        true.xor(false)
    ]
]
.forEach(v => {
    console.log(v[0]+' Function :');
    console.log(v[1]);
    console.log('\n');
});
