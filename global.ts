--[[ Lua code. See documentation: https://api.tabletopsimulator.com/ --]]

--[[ The onLoad event is called after the game save finishes loading. --]]
function onLoad()
    Ruth = getObjectFromGUID("1645d1")
    Mac = getObjectFromGUID("3ccf26")
    Adam = getObjectFromGUID("7ee767")
    Bill = getObjectFromGUID("0c0373")
    Jennie = getObjectFromGUID("71191a")
    Angela = getObjectFromGUID("4a9de4")
    Robert = getObjectFromGUID("c6cc7c")

    TotalCharactersChosen = 0
    Ruth.createButton(({
        click_function = "ChooseRuth",
        function_owner = Global,
        label          = "Ruth",
        position       = {0,.5,-3},
        rotation       = {0,180,0},
        width          = 1500,
        height         = 700,
        font_size      = 600,
        color          = {0, 0, 0},
        font_color     = {1, 1, 1},
    }))
    Mac.createButton(({
        click_function = "ChooseMac",
        function_owner = Global,
        label          = "Mac",
        position       = {0,.5,-3},
        rotation       = {0,180,0},
        width          = 1500,
        height         = 700,
        font_size      = 600,
        color          = {0, 0, 0},
        font_color     = {1, 1, 1},
    }))
    Adam.createButton(({
        click_function = "ChooseAdam",
        function_owner = Global,
        label          = "Adam",
        position       = {0,.5,-3},
        rotation       = {0,180,0},
        width          = 1500,
        height         = 700,
        font_size      = 600,
        color          = {0, 0, 0},
        font_color     = {1, 1, 1},
    }))
    Bill.createButton(({
        click_function = "ChooseBill",
        function_owner = Global,
        label          = "Bill",
        position       = {0,.5,-3},
        rotation       = {0,180,0},
        width          = 1500,
        height         = 700,
        font_size      = 600,
        color          = {0, 0, 0},
        font_color     = {1, 1, 1},
    }))
    Jennie.createButton(({
        click_function = "ChooseJennie",
        function_owner = Global,
        label          = "Jennie",
        position       = {0,.5,-3},
        rotation       = {0,180,0},
        width          = 1600,
        height         = 700,
        font_size      = 600,
        color          = {0, 0, 0},
        font_color     = {1, 1, 1},
    }))
    Angela.createButton(({
        click_function = "ChooseAngela",
        function_owner = Global,
        label          = "Angela",
        position       = {0,.5,-3},
        rotation       = {0,180,0},
        width          = 1900,
        height         = 700,
        font_size      = 600,
        color          = {0, 0, 0},
        font_color     = {1, 1, 1},
    }))
    Robert.createButton(({
        click_function = "ChooseRobert",
        function_owner = Global,
        label          = "Robert",
        position       = {0,.5,-3},
        rotation       = {0,180,0},
        width          = 1900,
        height         = 700,
        font_size      = 600,
        color          = {0, 0, 0},
        font_color     = {1, 1, 1},
    }))

    Characters = ({ Ruth, Mac, Adam, Bill, Jennie, Angela, Robert })
    -- for i, v in pairs(Characters) do
    --     v.interactable = false
    -- end
    CharactersPicked = ({ 0,0,0,0,0,0,0})

    Random = getObjectFromGUID("c16180")
    Random.createButton(({
        click_function = "ChooseRandom",
        function_owner = Global,
        label          = "Random",
        position       = {0, .25, 0},
        rotation       = {0,180,0},
        width          = 1200,
        height         = 410,
        font_size      = 310,
        color          = {0, 0, 0},
        font_color     = {1, 1, 1},
    }))

    RedAreaDeck = getObjectFromGUID("9180ae")
    RedPlayAreaOne = getObjectFromGUID("b5112e")
    RedZombieOne = getObjectFromGUID("4416a8")
    RedZombieTwo = getObjectFromGUID("ffaf33")
    RedZombieThree = getObjectFromGUID("7d7cd1")
    RedZombieFour = getObjectFromGUID("2ff787")
    RedKillDestroy = getObjectFromGUID("8f0cff")
    RedZombieZoneSix = getObjectFromGUID("670498")
    RedZombieZoneFour = getObjectFromGUID("c15765")
    RedZombieZoneTwo = getObjectFromGUID("a262f6")
    RedZombieZoneOne = getObjectFromGUID("70bf9e")
    RedZombieZoneThree = getObjectFromGUID("c22797")
    RedZombieZoneFive = getObjectFromGUID("c9d4b2")
    RedZombieZoneSeven = getObjectFromGUID("84717e")
    RedCharacterZone = getObjectFromGUID("3ac1de")
    RedDeckZone = getObjectFromGUID("b89ddf")
    RedDiscardZone = getObjectFromGUID("cdc906")
    RedWaveCounter = getObjectFromGUID("a84d5a")
    RedDestroyed = getObjectFromGUID("7ead75")
    RedHand = getObjectFromGUID("620a01")

    RedZombies = ({
        One = RedZombieOne,
        Two = RedZombieTwo,
        Three = RedZombieThree,
        Four = RedZombieFour,
    })
    RedZombieZone = ({
        One = RedZombieZoneOne,
        Two = RedZombieZoneTwo,
        Three = RedZombieZoneThree,
        Four = RedZombieZoneFour,
        Five = RedZombieZoneFive,
        Six = RedZombieZoneSix,
        Seven = RedZombieZoneSeven,
    })
    RedPlayer = ({
        color = "Red",
        DeckZone = RedDeckZone,
        DiscardZone = RedDiscardZone,
        CharacterZone = RedCharacterZone,
        KillDestroy = RedKillDestroy,
        AreaDeckZone = RedAreaDeck,
        StartingCard = RedPlayAreaOne,
        Zombies = RedZombies,
        ZombieZone = RedZombieZone,
        ZombieZoneOccupied = ({0,0,0,0,0,0,0}),
        Destroyed = RedDestroyed,
        WaveCounter = RedWaveCounter,
        Hand = RedHand,
    })

    BrownAreaDeck = getObjectFromGUID("eeb028")
    BrownPlayAreaOne = getObjectFromGUID("a8216a")
    BrownZombieOne = getObjectFromGUID("1c3d78")
    BrownZombieTwo = getObjectFromGUID("cd17a2")
    BrownZombieThree = getObjectFromGUID("d22a49")
    BrownZombieFour = getObjectFromGUID("c85dd3")
    BrownKillDestroy = getObjectFromGUID("cf5d74")
    BrownZombieZoneSix = getObjectFromGUID("9a5a24")
    BrownZombieZoneFour = getObjectFromGUID("a4c17a")
    BrownZombieZoneTwo = getObjectFromGUID("10ac17")
    BrownZombieZoneOne = getObjectFromGUID("4a8532")
    BrownZombieZoneThree = getObjectFromGUID("ec0ad8")
    BrownZombieZoneFive = getObjectFromGUID("c6f3c4")
    BrownZombieZoneSeven = getObjectFromGUID("8316dc")
    BrownCharacterZone = getObjectFromGUID("e7c153")
    BrownDeckZone = getObjectFromGUID("aa4c10")
    BrownDiscardZone = getObjectFromGUID("8ff53e")
    BrownWaveCounter = getObjectFromGUID("5b3f23")
    BrownDestroyed = getObjectFromGUID("d891fe")
    BrownHand = getObjectFromGUID("9a0411")

    BrownZombies = ({
        One = BrownZombieOne,
        Two = BrownZombieTwo,
        Three = BrownZombieThree,
        Four = BrownZombieFour,
    })
    BrownZombieZone = ({
        One = BrownZombieZoneOne,
        Two = BrownZombieZoneTwo,
        Three = BrownZombieZoneThree,
        Four = BrownZombieZoneFour,
        Five = BrownZombieZoneFive,
        Six = BrownZombieZoneSix,
        Seven = BrownZombieZoneSeven,
    })
    BrownPlayer = ({
        Color = "Brown",
        DeckZone = BrownDeckZone,
        DiscardZone = BrownDiscardZone,
        CharacterZone = BrownCharacterZone,
        KillDestroy = BrownKillDestroy,
        AreaDeckZone = BrownAreaDeck,
        StartingCard = BrownPlayAreaOne,
        Zombies = BrownZombies,
        ZombieZone = BrownZombieZone,
        ZombieZoneOccupied = ({0,0,0,0,0,0,0}),
        Destroyed = BrownDestroyed,
        WaveCounter = BrownWaveCounter,
        Hand = BrownHand,
    })

    WhiteAreaDeck = getObjectFromGUID("e28dfe")
    WhitePlayAreaOne = getObjectFromGUID("d17b6d")
    WhiteZombieOne = getObjectFromGUID("a76040")
    WhiteZombieTwo = getObjectFromGUID("137da3")
    WhiteZombieThree = getObjectFromGUID("3790a6")
    WhiteZombieFour = getObjectFromGUID("4ae5e5")
    WhiteKillDestroy = getObjectFromGUID("c0333d")
    WhiteZombieZoneSix = getObjectFromGUID("cf3aa5")
    WhiteZombieZoneFour = getObjectFromGUID("30d09e")
    WhiteZombieZoneTwo = getObjectFromGUID("6846b7")
    WhiteZombieZoneOne = getObjectFromGUID("3b37bf")
    WhiteZombieZoneThree = getObjectFromGUID("701be0")
    WhiteZombieZoneFive = getObjectFromGUID("542797")
    WhiteZombieZoneSeven = getObjectFromGUID("68bce3")
    WhiteCharacterZone = getObjectFromGUID("aa3f07")
    WhiteDeckZone = getObjectFromGUID("282f59")
    WhiteDiscardZone = getObjectFromGUID("0a7fee")
    WhiteWaveCounter = getObjectFromGUID("f1d7be")
    WhiteDestroyed = getObjectFromGUID("6ff803")
    WhiteHand = getObjectFromGUID("8de44a")

    WhiteZombies = ({
        One = WhiteZombieOne,
        Two = WhiteZombieTwo,
        Three = WhiteZombieThree,
        Four = WhiteZombieFour,
    })
    WhiteZombieZone = ({
        One = WhiteZombieZoneOne,
        Two = WhiteZombieZoneTwo,
        Three = WhiteZombieZoneThree,
        Four = WhiteZombieZoneFour,
        Five = WhiteZombieZoneFive,
        Six = WhiteZombieZoneSix,
        Seven = WhiteZombieZoneSeven,
    })
    WhitePlayer = ({
        Color = "White",
        DeckZone = WhiteDeckZone,
        DiscardZone = WhiteDiscardZone,
        CharacterZone = WhiteCharacterZone,
        KillDestroy = WhiteKillDestroy,
        AreaDeckZone = WhiteAreaDeck,
        StartingCard = WhitePlayAreaOne,
        Zombies = WhiteZombies,
        ZombieZone = WhiteZombieZone,
        ZombieZoneOccupied = ({0,0,0,0,0,0,0}),
        Destroyed = WhiteDestroyed,
        WaveCounter = WhiteWaveCounter,
        Hand = WhiteHand,
    })

    RedDrawOne = getObjectFromGUID("75e29b")
    RedDrawFive = getObjectFromGUID("0518bf")
    BrownDrawOne = getObjectFromGUID("267553")
    BrownDrawFive = getObjectFromGUID("1d493f")
    WhiteDrawOne = getObjectFromGUID("9e38a3")
    WhiteDrawFive = getObjectFromGUID("3377aa")

    RedDrawOne.createButton({
        click_function = "RedDrawsOne",
        function_owner = Global,
        label          = "Draw One",
        position       = {0,.3,0},
        rotation       = {0,180,0},
        width          = 1000,
        height         = 600,
        font_size      = 200,
        color          = {0, 0, 0},
        font_color     = {1, 1, 1},
    })

    RedDrawFive.createButton({
        click_function = "RedDrawsFive",
        function_owner = Global,
        label          = "Draw Five",
        position       = {0,.3,0},
        rotation       = {0,180,0},
        width          = 1000,
        height         = 600,
        font_size      = 200,
        color          = {0, 0, 0},
        font_color     = {1, 1, 1},
    })

    BrownDrawOne.createButton({
        click_function = "BrownDrawsOne",
        function_owner = Global,
        label          = "Draw One",
        position       = {0,.3,0},
        rotation       = {0,180,0},
        width          = 1000,
        height         = 600,
        font_size      = 200,
        color          = {0, 0, 0},
        font_color     = {1, 1, 1},
    })

    BrownDrawFive.createButton({
        click_function = "BrownDrawsFive",
        function_owner = Global,
        label          = "Draw Five",
        position       = {0,.3,0},
        rotation       = {0,180,0},
        width          = 1000,
        height         = 600,
        font_size      = 200,
        color          = {0, 0, 0},
        font_color     = {1, 1, 1},
    })

    WhiteDrawOne.createButton({
        click_function = "WhiteDrawsOne",
        function_owner = Global,
        label          = "Draw One",
        position       = {0,.3,0},
        rotation       = {0,180,0},
        width          = 1000,
        height         = 600,
        font_size      = 200,
        color          = {0, 0, 0},
        font_color     = {1, 1, 1},
    })

    WhiteDrawFive.createButton({
        click_function = "WhiteDrawsFive",
        function_owner = Global,
        label          = "Draw Five",
        position       = {0,.3,0},
        rotation       = {0,180,0},
        width          = 1000,
        height         = 600,
        font_size      = 200,
        color          = {0, 0, 0},
        font_color     = {1, 1, 1},
    })

    TableObject = ({
        rdestroyedCards = getObjectFromGUID("b78f0b"),
        rzombies = getObjectFromGUID("b78f0b"),
        rdestroy = getObjectFromGUID("b9c18f"),
        rscouted = getObjectFromGUID("e0aab0"),
        renemyZombies = getObjectFromGUID("243e96"),
        rplayArea = getObjectFromGUID("7eac22"),
        rareaDeck = getObjectFromGUID("8c1bff"),
        rdeck = getObjectFromGUID("8768d9"),
        rdiscard = getObjectFromGUID("191302"),

        bdestroyedCards = getObjectFromGUID("a0b1ff"),
        bzombies = getObjectFromGUID("980363"),
        bdestroy = getObjectFromGUID("c031b7"),
        bscouted = getObjectFromGUID("3b6d50"),
        benemyZombies = getObjectFromGUID("8d38fe"),
        bplayArea = getObjectFromGUID("6af26a"),
        bareaDeck = getObjectFromGUID("258313"),
        bdeck = getObjectFromGUID("c11c8b"),
        bdiscard = getObjectFromGUID("cfb30e"),

        wdestroyedCards = getObjectFromGUID("92cc51"),
        wzombies = getObjectFromGUID("812d7c"),
        wdestroy = getObjectFromGUID("141dce"),
        wscouted = getObjectFromGUID("bb11ed"),
        wenemyZombies = getObjectFromGUID("a5c0b5"),
        wplayArea = getObjectFromGUID("c00875"),
        wareaDeck = getObjectFromGUID("69f985"),
        wdeck = getObjectFromGUID("723b74"),
        wdiscard = getObjectFromGUID("447cba"),

        table = getObjectFromGUID("d7b6e1"),
        table2 = getObjectFromGUID("a96cb3"),
    })

    for i,v in pairs(TableObject) do
        v.interactable = false
    end

end

function WhiteDrawsOne()
    DrawOne(WhitePlayer)
    Wait.frames(function() SendZombiesToPlayZone(WhitePlayer) end, 500)
end
function WhiteDrawsFive()
    DrawFive(WhitePlayer)
    Wait.frames(function() SendZombiesToPlayZone(WhitePlayer) end, 500)
end

function RedDrawsOne()
    DrawOne(RedPlayer)
    Wait.frames(function() SendZombiesToPlayZone(RedPlayer) end, 500)
end
function RedDrawsFive()
    DrawFive(RedPlayer)
    Wait.frames(function() SendZombiesToPlayZone(RedPlayer) end, 500)
end

function BrownDrawsOne()
    DrawOne(BrownPlayer)
    Wait.frames(function() SendZombiesToPlayZone(BrownPlayer) end, 500)
end
function BrownDrawsFive()
    DrawFive(BrownPlayer)
    Wait.frames(function() SendZombiesToPlayZone(BrownPlayer) end, 500)
end

function SendZombiesToPlayZone(player)

    for i,v in pairs(player.Hand.getObjects()) do
        if (v.getName() == "Zombie1" or
            v.getName() == "Zombie2" or
            v.getName() == "Zombie3" or
            v.getName() == "Zombie4") then

            --SendZombieToPlayZone(v, player)
        end
    end
end

function SendZombieToPlayZone(card, player)
    -- local zombieFound = false
    for j,k in pairs(player.ZombieZone.One.getObjects()) do
        if (k.type == 'Card' or k.type == 'Deck') then
            zombieFound = true
            player.ZombieZoneOccupied[1] = 1
        end
    end
    if (player.ZombieZoneOccupied[1] == 0) then
        local zone = player.ZombieZone.One.getPosition()
        card.setPosition({zone.x, zone.y + 1, zone.z} )
        player.ZombieZoneOccupied[1] = 1
        return
    end

    for j,k in pairs(player.ZombieZone.Two.getObjects()) do
        if (k.type == 'Card' or k.type == 'Deck') then
            player.ZombieZoneOccupied[2] = 1
        end
    end
    if (player.ZombieZoneOccupied[2] == 0) then
        local zone = player.ZombieZone.Two.getPosition()
        card.setPosition({zone.x, zone.y + 1, zone.z} )
        player.ZombieZoneOccupied[2] = 1
        return
    end

    for j,k in pairs(player.ZombieZone.Three.getObjects()) do
        if (k.type == 'Card' or k.type == 'Deck') then
            player.ZombieZoneOccupied[3] = 1
        end
    end
    if (player.ZombieZoneOccupied[3] == 0) then
        local zone = player.ZombieZone.Three.getPosition()
        card.setPosition({zone.x, zone.y + 1, zone.z} )
        player.ZombieZoneOccupied[3] = 1
        return
    end

    for j,k in pairs(player.ZombieZone.Four.getObjects()) do
        if (k.type == 'Card' or k.type == 'Deck') then
            player.ZombieZoneOccupied[4] = 1
        end
    end
    if (player.ZombieZoneOccupied[4] == 0) then
        local zone = player.ZombieZone.Four.getPosition()
        card.setPosition({zone.x, zone.y + 1, zone.z} )
        player.ZombieZoneOccupied[4] = 1
        return
    end

    for j,k in pairs(player.ZombieZone.Five.getObjects()) do
        if (k.type == 'Card' or k.type == 'Deck') then
            player.ZombieZoneOccupied[5] = 1
        end
    end
    if (player.ZombieZoneOccupied[5] == 0) then
        local zone = player.ZombieZone.Five.getPosition()
        card.setPosition({zone.x, zone.y + 1, zone.z} )
        player.ZombieZoneOccupied[5] = 1
        return
    end

    for j,k in pairs(player.ZombieZone.Six.getObjects()) do
        if (k.type == 'Card' or k.type == 'Deck') then
            player.ZombieZoneOccupied[6] = 1
        end
    end
    if (player.ZombieZoneOccupied[6] == 0) then
        local zone = player.ZombieZone.Six.getPosition()
        card.setPosition({zone.x, zone.y + 1, zone.z} )
        player.ZombieZoneOccupied[6] = 1
        return
    end

    for j,k in pairs(player.ZombieZone.Seven.getObjects()) do
        if (k.type == 'Card' or k.type == 'Deck') then
            player.ZombieZoneOccupied[7] = 1
        end
    end
    if (player.ZombieZoneOccupied[7] == 0) then
        local zone = player.ZombieZone.Seven.getPosition()
        card.setPosition({zone.x, zone.y + 1, zone.z} )
        player.ZombieZoneOccupied[7] = 1
        return
    end
    zombieFound = false

end

function DrawOne(player)
    local deck
    for i,v in pairs(player.DeckZone.getObjects()) do
        if (v.type == 'Card' or v.type == 'Deck') then
            deck = v
        end
    end
    if (deck == nil) then
        Wait.frames(function() ShuffleDiscard(player, true) end, 50)
        Wait.frames(function() DrawOne(player) end, 250)
    elseif (deck.type == 'Card') then
        deck.flip()
        if (deck.getName() == "Zombie1" or
            deck.getName() == "Zombie2" or
            deck.getName() == "Zombie3" or
            deck.getName() == "Zombie4") then
                Wait.frames(function() SendZombieToPlayZone(deck, player) end, 25)
                Wait.frames(function()
                    for i=1, 7 do
                        player.ZombieZoneOccupied[i] = 0
                    end
                end, 500)
        else
            deck.setPositionSmooth(player.Hand.getPosition(), false, false)
        end
    elseif (deck.type == 'Deck') then
        local card = deck.takeObject()
        card.flip()
        if (card.getName() == "Zombie1" or
            card.getName() == "Zombie2" or
            card.getName() == "Zombie3" or
            card.getName() == "Zombie4") then
                Wait.frames(function() SendZombieToPlayZone(card, player) end, 25)
                Wait.frames(function()
                    for i=1, 7 do
                        player.ZombieZoneOccupied[i] = 0
                    end
                end, 500)
        else
            card.setPositionSmooth(player.Hand.getPosition(), false, false)
        end
    end
end

function DrawFive(player)
    local cardsLeft
    local cardRemainder
    cardsLeft = 0
    cardRemainder = 0
    local deck
    local discardDeck
    for i,v in pairs(player.DeckZone.getObjects()) do
        if (v.type == 'Card' or v.type == 'Deck') then
            deck = v
        end
    end
    for i,v in pairs(player.DiscardZone.getObjects()) do
        if (v.type == 'Card' or v.type == 'Deck') then
            discardDeck = v
        end
    end
    if deck == nil and discardDeck == nil then
        return
    end
    if deck == nil then
        cardsLeft = 0
    elseif deck.getQuantity() == -1 then
        cardsLeft = 1
    else
        cardsLeft = deck.getQuantity()
    end

    if cardsLeft > 5 then
        cardsLeft = 5
    else
        cardRemainder = 5 - cardsLeft
    end

    for i=1, cardsLeft do
        DrawOne(player)
    end
    if cardRemainder > 0 then
        Wait.frames(function() ShuffleDiscard(player, true) end, 50)
        for i=1, cardRemainder do
            Wait.frames(function() DrawOne(player) end, 150)
        end
    end
end

function DealZombies(card, player, zombiesToAdd)
    local discard = player.DiscardZone.getPosition()
    if (card.type == 'Card') then
        zombiesToAdd = zombiesToAdd - 1
        card.setPosition({discard.x, discard.y + 1, discard.z})
    elseif (card.type == 'Deck') then
        for i = 1, #card.getObjects() do
            if (zombiesToAdd > 0) then
                card.takeObject().setPosition({discard.x, discard.y + 1, discard.z})
            end
            zombiesToAdd = zombiesToAdd - 1
        end
    end
    return zombiesToAdd
end

function ShuffleDiscard(player, skipWave)
    local zombiesToAdd = player.WaveCounter.Counter.getValue()
    if (skipWave) then
        player.WaveCounter.Counter.increment()
        zombiesToAdd = player.WaveCounter.Counter.getValue()
        broadcastToAll("No more cards! " .. player.Color .. " is now on wave " .. zombiesToAdd, {r=1, g=0, b=0})
    end

    local ones = player.Zombies.One.getObjects()
    local one
    for i,v in pairs(ones) do
        if (v.type == 'Card' or v.type == 'Deck') then
            one = v
        end
    end
    if (one ~= nil) then
        zombiesToAdd = DealZombies(one, player, zombiesToAdd)
    end

    local twos = player.Zombies.Two.getObjects()
    local two
    for i,v in pairs(twos) do
        if (v.type == 'Card' or v.type == 'Deck') then
            two = v
        end
    end
    if (two ~= nil and zombiesToAdd > 0) then
        zombiesToAdd = DealZombies(two, player, zombiesToAdd)
    end

    local threes = player.Zombies.Three.getObjects()
    local three
    for i,v in pairs(threes) do
        if (v.type == 'Card' or v.type == 'Deck') then
            three = v
        end
    end
    if (three ~= nil and zombiesToAdd > 0) then
        zombiesToAdd = DealZombies(three, player, zombiesToAdd)
    end

    local fours = player.Zombies.Four.getObjects()
    local four
    for i,v in pairs(fours) do
        if (v.type == 'Card' or v.type == 'Deck') then
            four = v
        end
    end
    if (four ~= nil and zombiesToAdd > 0) then
        zombiesToAdd = DealZombies(four, player, zombiesToAdd)
    end

    local deckPostition = player.DeckZone.getPosition()
    Wait.frames(function()
        local discardDeck = player.DiscardZone.getObjects()
        for i,v in pairs(discardDeck) do
            if (v.type == 'Deck' or v.type == 'Card') then
                v.flip()
                v.shuffle()
                v.setPosition({deckPostition.x, deckPostition.y +1, deckPostition.z})
            end
        end
    end, 50)
end

function ChooseRuth(obj, playerColor, click)
    if (CharactersPicked[1] == 0) then
        SetupPlayer(GetPlayerObject(playerColor), Ruth)
        CharactersPicked[1] = 1
    end
end

function ChooseMac(obj, playerColor, click)
    if (CharactersPicked[2] == 0) then
        SetupPlayer(GetPlayerObject(playerColor), Mac)
        CharactersPicked[2] = 1
    end
end

function ChooseAdam(obj, playerColor, click)
    if (CharactersPicked[3] == 0) then
        SetupPlayer(GetPlayerObject(playerColor), Adam)
        CharactersPicked[3] = 1
    end
end

function ChooseBill(obj, playerColor, click)
    if (CharactersPicked[4] == 0) then
        SetupPlayer(GetPlayerObject(playerColor), Bill)
        CharactersPicked[4] = 1
    end
end

function ChooseJennie(obj, playerColor, click)
    if (CharactersPicked[5] == 0) then
        SetupPlayer(GetPlayerObject(playerColor), Jennie)
        CharactersPicked[5] = 1
    end
end

function ChooseAngela(obj, playerColor, click)
    if (CharactersPicked[6] == 0) then
        SetupPlayer(GetPlayerObject(playerColor), Angela)
        CharactersPicked[6] = 1
    end
end

function ChooseRobert(obj, playerColor, click)
    if (CharactersPicked[7] == 0) then
        SetupPlayer(GetPlayerObject(playerColor), Robert)
        CharactersPicked[7] = 1
    end
end

function ChooseRandom(obj, playerColor, click)
    if (TotalCharactersChosen >= 7) then
        return
    end
    local unusedNumber = false
    local number = 0
    math.randomseed(os.time())
    while (unusedNumber == false) do
        number = math.random(7)
        if (CharactersPicked[number] == 0) then
            CharactersPicked[number] = 1
            unusedNumber = true
        end
    end
    SetupPlayer(GetPlayerObject(playerColor), Characters[number])
end

function SetupPlayer(player, character)
    TotalCharactersChosen = TotalCharactersChosen + 1
    DealCharacter(player, character)
    DealStartingCard(player, character)
    DealStartingDeck(player, character)
    DealAreaDeck(player, character)
    Wait.frames(function() SendZombiesToPlayZone(player) end, 500)
end

function DealCharacter(player, character)
    local characterCard = character.takeObject()
    local characterPosition = player.CharacterZone.getPosition()
    characterCard.setPositionSmooth(({characterPosition.x, characterPosition.y + 1, characterPosition.z}), false, false)
    characterCard.setRotation({0, 180, 0})
    characterCard.setLock(true)
end

function DealStartingCard(player, character)
    local card  = character.takeObject()
    local cardPosition = player.StartingCard.getPosition()
    card.setPositionSmooth({cardPosition.x, cardPosition.y + 1, cardPosition.z}, false, false)
    card.setRotation({0, 270, 0})
end

function DealStartingDeck(player, character)
    ShuffleDiscard(player, false)
    local startingDeck = character.takeObject()
    local startingDeckPosition = player.DeckZone.getPosition()
    startingDeck.setRotation({0, 180, 0})
    startingDeck.flip()
    startingDeck.setPosition({startingDeckPosition.x, startingDeckPosition.y + 1, startingDeckPosition.z}, false, false)
    Wait.frames(function()
        for i,v in pairs(player.DeckZone.getObjects()) do
            if (v.type == 'Deck') then
                v.shuffle()
            end
        end
        DrawFive(player)
    end, 200)
end

function DealAreaDeck(player, character)
    local areaDeck = character.takeObject()
    local areaDeckPosition = player.AreaDeckZone.getPosition()
    areaDeck.setRotation({0, 180, 0})
    areaDeck.flip()
    areaDeck.shuffle()
    areaDeck.setPositionSmooth({areaDeckPosition.x, areaDeckPosition.y + 1, areaDeckPosition.z}, false, false)
end

function GetPlayerObject(pColor)
    if (pColor == "Red") then
        return RedPlayer
    elseif (pColor == "Brown") then
        return BrownPlayer
    elseif (pColor == "White") then
        return WhitePlayer
    end
end

function KillZombies(zone, enter_object)
    if (enter_object.type == 'Card') then
        if (enter_object.getName() == 'Zombie1') then
            local pos = zone.Zombies.One.getPosition()
            enter_object.setPosition({pos.x,pos.y+1,pos.z})
        elseif (enter_object.getName() == 'Zombie2') then
            local pos = zone.Zombies.Two.getPosition()
            enter_object.setPosition({pos.x,pos.y+1,pos.z})
        elseif (enter_object.getName() == 'Zombie3') then
            local pos = zone.Zombies.Three.getPosition()
            enter_object.setPosition({pos.x,pos.y+1,pos.z})
        elseif (enter_object.getName() == 'Zombie4') then
            local pos = zone.Zombies.Four.getPosition()
            enter_object.setPosition({pos.x,pos.y+1,pos.z})
        else
            local pos = zone.Destroyed.getPosition()
            enter_object.setPosition(pos)
        end
    elseif (enter_object.type == 'Deck') then
        local deck
        for i,v in pairs(zone.KillDestroy.getObjects()) do
            if (v.type == 'Deck') then
                deck = v
            end
        end
        for i,v in pairs(deck.getObjects()) do
            local card = deck.takeObject()
        end
    end
end

--[[ The onUpdate event is called once per frame. --]]
function onUpdate()
    function onObjectEnterScriptingZone(zone, enter_object)
        if (zone == WhitePlayer.KillDestroy) then
            KillZombies(WhitePlayer, enter_object)
        elseif (zone == RedPlayer.KillDestroy) then
            KillZombies(RedPlayer, enter_object)
        elseif (zone == BrownPlayer.KillDestroy) then
            KillZombies(BrownPlayer, enter_object)
        end
    end
end
