# NOTES.md

Comments extracted from `index.html` when comments were stripped.

## JS block comments

```
==========================================================================
   MIRROR WAR — Tiny Swords RTS-lite
   Both factions use Blue Units sprites. Identification = positional memory
   + command obedience. The mouse is a powerful, dangerous tool.
   ==========================================================================
```

```
-------------------- Responsive scaling --------------------
```

```
-------------------- Asset loading --------------------
```

```
-------------------- Utility --------------------
```

```
-------------------- Sound (Web Audio, synthesized inline) --------------------
```

```
-------------------- Game State --------------------
```

```
-------------------- Sprite --------------------
```

```
-------------------- Background Tile Drawing --------------------
```

```
-------------------- Unit Types --------------------
```

```
-------------------- Unit --------------------
```

```
-------------------- Arrow --------------------
```

```
-------------------- FX --------------------
```

```
-------------------- Buildings --------------------
```

```
-------------------- Building Types --------------------
   `cd` = per-type cooldown in seconds (prevents instant spam of the same building)
   `max` = hard cap on how many of this type the player can own at once
   ------------------------------------------------------------------
```

```
-------------------- Neutral Creatures (event characters) --------------------
```

```
-------------------- Game Init --------------------
```

```
-------------------- Spawn units --------------------
```

```
-------------------- Random Events --------------------
```

```
-------------------- Enemy Archetypes (rolled once per game) --------------------
   Each archetype tilts the enemy's choices in a distinct direction so two games
   never feel the same. Beyond fixed biases, the AI also adapts to current game state
   (e.g. switches to defense when its castle is wounded).
   -------------------------------------------------------------------------------
```

```
-------------------- Enemy slash (mirrors the player's mouse) --------------------
```

```
-------------------- Enemy AI --------------------
   Driven by the rolled archetype + adaptive moods. The archetype controls baseline
   preferences (which units/buildings/orders to favor and how aggressively to slash).
   Moods are temporary state-driven overrides that react to the unfolding game.
   -----------------------------------------------------------------------------
```

```
-------------------- Camera --------------------
```

```
-------------------- Main update loop --------------------
```

```
-------------------- Minimap (battlefield overview) --------------------
```

```
-------------------- Off-screen markers for units beyond the viewport --------------------
```

```
-------------------- Input --------------------
```

```
hook the slash arc into the fx draw loop (custom)
```

```
-------------------- Render override to include slash arcs + cleanup --------------------
```

```
-------------------- HUD wiring --------------------
```

```
HUD tick
```

```
-------------------- Overlay --------------------
```

```
-------------------- Boot --------------------
```

## JS line comments

- viewport width (visible window)
- total battlefield width (camera scrolls along this)
- a unit is "at home" if within this distance of its own castle
- Colors for selective rally-flag groups A, B, C, D, E, F
- Difficulty profiles — scale enemy strength so newcomers / veterans both have a fair fight.
- overall preferred difficulty; persists across restarts
- Spawn protection — SYMMETRIC: applies to both player AND enemy units.
- A unit is protected from cursor slashes while:
- - they haven't yet fired in anger (lifelong flag)
- - they're not currently fleeing
- - their team's command is HOLD
- - they're standing inside their own home radius (around their team's castle)
- throttle (name -> last play time)
- throttle so spammy events (e.g. arrow flights) don't clip
- sharp whoosh + metallic ring
- ring
- lower, more menacing whoosh
- brief metallic clink for unit melee
- whoosh, short
- two-tone happy "ding"
- wood hammer thunk
- click on top
- low thud
- sparkly upward sweep
- bright fanfare-ish chord
- descending buzzy "no"
- booming collapse
- Per-kill bounty for the PLAYER: base 5g, plus +3g for every Gold Mine they own.
- Awarded whether the kill is on an enemy OR on one of your own soldiers (blood money).
- ranked up
- ranked up
- player's army order
- now holds all Buildings (tower/goldmine/barracks/archery/monastery)
- null | 'WIN' | 'LOSE'
- world-space x of left edge of viewport
- desired cameraX (for smooth follow)
- edge-pan input grace window (time in seconds)
- overrides camera target to player keep when > game.time
- when false, camera stays where the player left it (sticky pan)
- 'tower'|'goldmine'|'barracks'|'archery'|'monastery' — placing a building
- per-type cooldown end time (game.time) — blocks spam-stacking buildings
- true when waiting for the player to click-place a rally flag
- world x of the player's rally flag (used when command === 'FLAG')
- list of {x,y,group} for selective flags (rendered as separate flags)
- {x0,y0,x1,y1} while drag-selecting in flag mode
- units that have been drag-selected and are waiting for a destination click
- neutral wandering creatures from random events (pawn merchant, sheep, etc.)
- enemy AI slash cooldown (seconds)
- game.time when the next random event triggers
- Pre-rendered grass canvas spans the whole WORLD_W
- dirt path winding across the full world
- banner flags / stone markers across the world (decor)
- base grass — only blit the visible slice
- friendly/enemy half tint (world-space, then translate)
- castle ground shadows
- world-center marker
- apply team-wide buffs from buildings (HP bonus from Barracks, dmg from Archery).
- Enemies are stronger than the player baseline by an amount set by difficulty level.
- low-HP retreat behavior
- permanent: once this unit has attacked, no more protection
- rally-cry buff duration remaining
- personal rally flag (overrides team command if set)
- which flag group this unit belongs to (color/letter)
- visual highlight while drag-selecting in flag mode
- Per-unit battle personality — makes the army feel uneven and alive instead
- of acting like a single mind. Rolled once at spawn.
- ~15%: ignore most enemies, ram the goal
- ~25%: very aggressive engagement, chase far
- ~60%: stop and fight when enemies are close
- staggered so units don't re-target in lockstep
- Idle wander — when units have nothing to do they shuffle around their goal instead
- of becoming pixel-perfect cursor targets. Each unit picks a new wander offset
- every ~1.5–3s.
- lancer
- Personal rally flag overrides the team command
- Monks seek the most-wounded friendly unit to heal
- Low-HP flee event — heavily-wounded units (non-healers) try to retreat to their keep.
- BUT: a soldier already standing inside a keep zone (their own OR the enemy's) doesn't
- flee — they stand and fight where they are.
- Run toward own castle. Use a small deadband near the castle so the unit
- stops cleanly instead of oscillating around its target.
- Close enough — just stand and recover, no facing flip
- POST-FLEE SHELTER: a low-HP unit that just made it home shouldn't immediately
- chase enemies back out — that creates a flee-pursue-flee oscillation.
- While they're at home AND wounded (<35% HP), force them to hold position.
- slow walk back to safety
- Periodically scan for the closest enemy — keeps units engaging foes that
- pass through their zone instead of marching past them.
- Base aggro radius, then scaled by this unit's personal stance.
- monks always pursue allies
- Chargers don't bother chasing — they only engage if an enemy is directly in their path
- Periodically pick a new wander offset so units don't congeal into one pixel.
- Apply the wander offset to the goal — keeps soldiers drifting instead of
- standing as motionless cursor targets.
- Touched the wander point — pick another immediately so they keep moving.
- Once a soldier swings or shoots, they're committed — no more home-area protection.
- Healing counts too: the monk has acted, they're in the fight now.
- Bounty: base 5g + 3g per Gold Mine. Applies to ANY kill credited to the player,
- including a cursor-slash on one of your own — the mirror takes its price.
- Protection ring — drawn while this unit is in the home area on HOLD.
- The ring stays as long as protection holds, telling the player (and the enemy
- they accidentally hover over) that this soldier can't be slashed right now.
- Fading entry glow for units that just left protection — gives a brief visual cue
- brief flash when this unit is given a command (proves they're yours)
- drag-select highlight (while user is dragging in flag mode)
- personal flag group badge (small letter above the unit)
- Per-kind sprite + shadow offsets.
- Lancer's 320x320 frame has a lot of empty space above the body (the spear extends
- upward), so the character's feet are far above the frame's bottom edge.
- We compensate by drawing the sprite lower so its feet land at the same baseline
- as other units, and place the shadow under the feet.
- shadow under the feet
- sprite
- hp bar (small, only when damaged)
- same color (no team hint)
- mild homing
- SUPER FAST — keep is a buzzsaw of arrows
- softer per-arrow hit; the volume of fire does the work
- shoot at nearest enemy unit within range
- banner
- unified blue banner — no team color difference!
- label
- ranked up: faster volley
- ranked up
- ranked up: faster pulses
- ranked up: stronger pulse
- brief construction flash
- tiny green pulse
- hp bar when damaged
- construction flash
- aura ring for support buildings (subtle)
- Wandering merchants (Pawn carrying gold), Sheep, etc.
- They wander across the map; the player can slash-kill them for a bounty.
- 'merchant' | 'sheep'
- +1 or -1, direction of travel
- sheep
- wander mostly horizontally with a little vertical wobble so they feel alive
- despawn once they exit the world on the far side
- shadow
- sprite
- golden glow + label for the merchant (so the player knows it's worth chasing)
- Spawn from either side of the world, wandering toward the other side
- first enemy command change after 5s
- first enemy unit after 4s
- long grace period at game start
- when current mood expires
- 'desperate' | 'aggressive' | null = follow archetype
- castles at the far ends of the world
- event scheduling
- reset per-type build cooldowns
- camera starts centered on player's keep
- briefly snap camera to centroid of player units so the player sees the buff
- a Pawn carrying gold crosses the map — slash him for a fat bounty
- a few sheep wander into the battlefield
- multiplies slash frequency
- smaller = faster buys (we divide intervals by this)
- less building
- options: array of keys; bias[key] gives the weight. Roll and return one.
- Trigger temporary mood shifts based on game state. These last 12-18s.
- keep falls — pull back, build defenses
- player keep is wounded — push hard for the kill
- outnumbered — turtle until ready
- outnumber the player — press
- STOCKPILE STRATEGY: while the enemy army is small, keep them back so they mass.
- Once they've built up a critical wave, they switch to ATTACK and push together.
- mass this many before going aggressive
- once below this after a push, regroup
- Default — apply stockpile phase on top of archetype bias
- building phase — hold the line near keep, no push yet
- when keep is hurt, lean toward defense
- -- Slash --
- Pick the most damaging victim: prefer wounded, then strong, depending on mood
- go for kills — pick lowest-HP unit
- pick the frontmost-advancing unit (closest to enemy keep)
- Archetype + difficulty scale the cooldown — higher aggression / harder = quicker repeats
- -- Recruit --
- Aggressive spawn cadence — the foe is pouring out troops. Archetype still tunes it.
- -- Build -- (rate scaled by archetype, plus a general buff so the enemy keeps up)
- -- Command shifts -- (weighted by archetype + mood + stockpile phase)
- If a stockpile phase change just happened, snap to a new command immediately.
- re-evaluate a bit more often than before
- The frontmost-still-alive unit on a team (rightmost for player, leftmost for enemy)
- 1. Decide where the camera WANTS to be, based on the player's army state.
- We only consult this when cameraFollow is true.
- 2. Edge-pan / arrow keys — these always work AND turn off auto-follow so
- the camera stays exactly where the player put it.
- Faster camera slide so panning across the wide world doesn't feel sluggish.
- Hold Shift while panning for a "sprint" speed.
- smooth follow only when enabled
- If cameraFollow is false and no edge-pan input, cameraX is sticky — exactly what the user wants.
- gold accrual baseline (small) — castle gives 0.5/s
- ui gold animation
- update castles & towers
- update units
- update neutral creatures (event characters: merchants, sheep)
- projectiles
- fx (slash arcs have no anim — handled separately)
- cleanup
- Prune flag groups that have no surviving members
- Random events
- sort draw order by y
- (we'll sort during render)
- result overlay
- ===== WORLD-SPACE rendering (translated by cameraX) =====
- Floating combat text (e.g. heal +18)
- Build mode ghost preview
- Rally flag (global FLAG order — only when no group flags fully cover the army)
- Per-group rally flags (selective)
- Flag-placement ghost preview at cursor (only when not actively dragging)
- Drag-select rectangle in flag mode
- ghost flag at endpoint
- Enemy slash telegraphs (red rings warning of incoming slash)
- ===== END world-space =====
- SCREEN-SPACE overlays
- soft dark strip across top of canvas (behind dom topbar)
- command badge floating above battlefield
- cooldown ring at mouse (mouse is in screen-space)
- edge-pan hint indicators
- backdrop
- ground line
- castles
- towers
- units — same color for both sides (the mirror!)
- camera viewport rectangle
- rally flag marker (global)
- per-group flag markers
- label
- off left
- simplify: just u.y
- viewport-space (for cursor ring, edge-pan)
- world-space (for slash hit-tests, build pads)
- mark units inside the rectangle for visual highlight
- Quick click — give EVERY player unit a personal flag at this point.
- game.command is untouched: ATTACK / HOLD / GUARD stays as it was, but the
- personal flag overrides each unit's destination so they rally here.
- Drag — collect units inside the rectangle as a "pending" group.
- The NEXT click sets the destination for these units (see mousedown handler above).
- stays highlighted until destination click
- Flag mode — two-step selective rally:
- 1. Drag a rectangle to mark a "pending" group (units inside get a yellow ring)
- 2. Click anywhere on the ground to set THAT group's destination
- 3. Plain click with no pending selection flags ALL units to the click point.
- also clear tempSelected markers
- If we already have a pending selection, this click sets their destination.
- Other units (not in the pending group) keep their existing HOLD/ATTACK/GUARD goal.
- No pending selection — start a drag for either a selection-rect or a quick-click-all-rally
- Build mode — place a building at the click point
- Start per-type cooldown so the same building can't be spammed instantly
- Otherwise — SLASH
- pole
- cloth — pulsing pixel-art triangle banner
- bevel
- letter badge on the cloth
- ground ring
- outer rally ring (target area)
- hex alpha — semi-transparent
- Per-type cooldown — prevents stacking many of the same building rapidly
- Per-type max count — keeps the economy/army from runaway
- tried to slash a spawn-protected unit
- Player units inside the home area are slash-immune while command is HOLD.
- Issue ATTACK/GUARD/FLAG (or let them leave the home area) to make them vulnerable.
- also let the player click on neutral creatures (sheep / merchant)
- slash arcs drawn in world space
- overlay text: show CD or MAX state
- Sub-second granularity below 5s so the badge doesn't visibly stick on the
- last integer second. >5s shows whole seconds for cleanliness.
- Flag button pulses while waiting for the player to click-place the rally point
- Switching to a global order clears all personal rally flags
- Re-engage follow mode when player gives an order — they want to see the result
- exit build mode if active
- Recruiting briefly grabs the camera so you see the new soldier emerge —
- but only if the player has follow mode on. Otherwise leave the view alone.
- re-show the intro overlay so player sees the new opponent
- event banner sync
- Sync the difficulty buttons to the active selection
- unlock audio context on first user gesture
- Difficulty selector — clicking a button records the player's preference for the next game.
- pick the first archetype, set up state...
- ...then the overlay can show who you're facing

## CSS comments

- TOP BAR
- BOTTOM BAR
- BUILD BUTTONS (smaller, icon-led, with active state)
- EVENT BANNER
- OVERLAYS
- Slash cursor feedback
- Tooltip for soul mechanic

## HTML comments

- Top bar
- Soul-mechanic note
- Event banner
- Bottom bar
