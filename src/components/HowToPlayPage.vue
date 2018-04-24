<template>
    <div class="container">
        <!-- Kitty Battles -->
        <div class="columns">
            <div class="column is-3">
                <img src="" class="image is-200x200" alt="">
            </div>
            <div class="column is-6">
                <h1 class="title is-1">KITTYBATTLES</h1>
                <h3 class="title is-3">- HOW TO PLAY GUIDE -</h3>
            </div>
            <div class="column is-3">
                <img src="" class="image is-200x200" alt="">
            </div>
        </div>

        <!-- Import Your Cats -->
        <div class="columns">
            <div class="column">
                <h3 class="title is-3">STEP 1: IMPORT YOUR CATS</h3>
                <p> KittyBattles is a 3 v 3 team battle game that is based off the popular
                    <a href="https://www.cryptokitties.co/" target="blank"> CryptoKitties </a>
                </p>
            </div>
        </div>

        <div class="columns">
            <div class="column is-2 is-offset-3">Cat Image 1</div>
            <div class="column is-2">Cat Image 2</div>
            <div class="column is-2">Cat Image 3</div>
            <div class="column is-3"></div>
        </div>
        <div class="columns">
            <div class="column">
                <p> To play you must have at least 3 CryptoKitties in your MetaMask wallet.</p>
                <p> You will be able to have up to 9 kittens in your battle roster at any given time. </p>
            </div>
        </div>


        <!-- Origins -->
        <div class="columns">
            <div class="column is-12">
                <h3 class="title is-3">STEP 2: BE MINDFUL OF ORIGINS</h3>
                <p> Each kitten has been given an "origin" based on it's specific body type.</p>
            </div>
        </div>
                <div class="columns">

            <div class="column is-3">Origin Image 1</div>
            <div class="column is-3">Origin Image 2</div>
            <div class="column is-3">Origin Image 3</div>
            <div class="column is-3">Origin Image 4</div>
        </div>

        <div class="columns">
            <div class="column">
                <p> These origins have certain advantages and disadvantages against other origins.</p>
                <p> <router-link to="/origin-page">Click here</router-link> to read up on all the different kitty origins. </p>
            </div>
        </div>

        <!-- Build Your Team -->
        <div class="columns">
            <div class="column">
                <h3 class="title is-3">STEP 3: BUILD YOUR TEAMS</h3>
                <p> Each team consists of 3 kittens, and you can have up to 3 battle teams.</p>
            </div>
        </div>

        <div class="columns">
            <div class="column is-2 is-offset-3">Cat Image 1</div>
            <div class="column is-2">Cat Image 2</div>
            <div class="column is-2">Cat Image 3</div>
            <div class="column is-3"></div>
        </div>
        <div class="columns">
            <div class="column">
                <p> To play you must have at least 3 CryptoKitties in your MetaMask wallet.</p>
                <p> You will be able to have up to 9 kittens in your battle roster at any given time. </p>
            </div>
        </div>


        <!-- Practice Your Moves-->
        <div class="columns">
            <div class="column is-12">
                <h3 class="title is-3">STEP 4: PRACTICE YOUR MOVES</h3>
                <p> In the <router-link to="/dojo">Dojo</router-link> you can practice your skills by batlling against the computer.</p>
            </div>
        </div>

        <div class="columns">
            <div class="column">Momochan Image</div>
        </div>
        <div class="columns">
            <div class="column">
                <p> Here you can win Expereince Points (XP) and Battle Points (BP) for your cats.</p>
                <p>Use the BP you earn here to challenge other players in the Battle Arena.</p>
            </div>
        </div>


        <!-- Battle Other Players -->
        <div class="columns">
            <div class="column">
                <h3 class="title is-3">STEP 5: BATTLE OTHER PLAYERS</h3>
                <p> The <router-link to="/home">Battle Arena</router-link> lets you take your teams out for Player vs. Player battles.</p>
            </div>
        </div>

        <div class="columns">
            <div class="column is-2">Cat Image 1</div>
            <div class="column is-2">Cat Image 2</div>
            <div class="column is-2">Cat Image 3</div>
            <div class="column is-2">Cat Image 4</div>
            <div class="column is-2">Cat Image 5</div>
            <div class="column is-2">Cat Image 6</div>
        </div>
        <div class="columns">
            <div class="column">
                <p> You will need to use BP you've earned in the Dojo to challenge other players.</p>
                <p> If you succeed you will win greater amounts of XP and the chance to level up! </p>
            </div>
        </div>


        <!-- Become A Battlemaster -->
        <div class="columns">
            <div class="column">
                <h3 class="title is-3">STEP 6: BECOME A KITTYBATTLE MASTER</h3>
                <p> Use your teams and skills wisely to become the ultimate KittyBattles Master!</p>
            </div>
        </div>

        <div class="columns">
            <div class="column"> DragonCat Image</div>
        </div>

        <!-- Build Your Roster Button -->
<router-link to="/roster" class="button is-large">START BUILDING YOUR TEAM ROSTER NOW!</router-link>
    </div>
</template>

<script>
    export default {
        name: 'how-to-play-page',
        data() {
            return {};
        }
    }
</script>

<scope>

</scope>