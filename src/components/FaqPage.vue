<template>
    <div id="app" class="container is-fluid">
        <router-view/>
        <h1 class="title is-1 is-spaced has-text-centered" id="margin4">FAQS AND GLOSSARY</h1>
        <div class="column howToPage">
            <h2 class="title is-2 has-text-centered" id="margin4">
                KITTYBATTLES BASICS
            </h2>

            <faqQ1 title="What is KittyBattles?"></faqQ1>
            <faqQ2 title="Does it cost anything to play KittyBattles?"></faqQ2>
            <faqQ3 title="How do I login to KittyBattles?"></faqQ3>

            <h2 class="title is-2 has-text-centered" id="margin4">
                BUILDING YOUR TEAMS
            </h2>


            <faqPlain title="What are Battle Teams and how do I make one?" content="Battle Teams consist of 3 of your Kitties that you choose from your linked wallet - mix and match these kitties to maximize your team’s potential. You can have a maximum of 3 Battle Teams, but only need 1 team to play.
            Kitties can be added or retired from your Battle Teams. If you retire a Kitty from a Battle Team, you will not
            be able to add them to another team for 7 days."></faqPlain>

            <faqPlain title="What happens when I 'retire' a kitten?" content="When you 'retire' a kitten, that kitten starts a 7-day 'battle break' cooldown (this cooldown is unique to the KittyBattles site only and has no affect on the kitty elsewhere). The kitty will retain all Experience Points (XP) and
            Skill Points (SP) acquired, so when they return to battle they will not have to start over."></faqPlain>
            <faqPlain title="What happens to a kitten's XP/BP/SP when I sell it?" content="When you sell a Battle Kitten, that kitten will retain all XP and SP earned while in your care. So battle those 'fail cats' to make them the most sought-after kitties in the Kittyverse."></faqPlain>


            <h2 class="title is-2 has-text-centered" id="margin4">
                GAMEPLAY
            </h2>
    
            <faqQ4 title="What are Kitty Origins?"></faqQ4>

            <faqPlain title="How do my Kitties gain experience and level up?" content="As you battle, your Kitties will gain both Experience Points (XP) and Battle Points (BP). Once a Kitty earns enough
            XP, they will level up and earn a Skill Point (SP). Skill Points can be used to level up acquired Battle Skills. Battle
            Points are a form of currency that you can spend to play in the Battle Arena."></faqPlain>




                <h2 class="title is-2 has-text-centered" id="margin4">
                    GLOSSARY OF TERMS
                </h2>
                <div class="column is-12">
                    <strong>Hit Points (HP) -</strong> aka. Health Points. These points are removed when you take damage and restored
                    when you are healed.
                </div>
                <div class="column is-12">

                    <strong>Experience Points (XP) -</strong> Points that each of your Kitties earn for completing and winning battles.
                    These will level up your kitties.
                </div>
                <div class="column is-12">

                    <strong>Skill Points (SP) -</strong> Points that are earned each time you level up that are used to better your
                    learned skills.
                </div>
                <div class="column is-12">

                    <strong>Battle Points (HP) -</strong> Points earned in the Dojo (and Battle Arena) that can be redeemed to play
                    in the Battle Arena.
                </div>




        </div>
        <div class="space"></div>
    </div>

</template>


<script>
    import faqPlain from './faqPlain';
    import faqQ1 from './faqQ1';
    import faqQ2 from './faqQ2';
    import faqQ3 from './faqQ3';
    import faqQ4 from './faqQ4';

    export default {
        name: 'app',
        components: {
            faqPlain,
            faqQ1,
            faqQ2,
            faqQ3,
            faqQ4,
        },
        data() {
            return {}
        }
    }
</script>

<scope>

</scope>