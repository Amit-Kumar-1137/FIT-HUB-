/**
 * Comprehensive Exercise Catalog Data
 * 8 distinct categories with 10 exercises each (80 total exercises):
 * - Chest
 * - Back
 * - Shoulder
 * - Biceps
 * - Triceps
 * - Leg
 * - Cardio
 * - Strength
 */

export const exerciseCategories = [
  'All',
  'Chest',
  'Back',
  'Shoulder',
  'Biceps',
  'Triceps',
  'Leg',
  'Cardio',
  'Strength'
];

export const exercisesData = [
  // ==========================================
  // 1. CHEST (10 Exercises)
  // ==========================================
  {
    id: 'chest-1',
    name: 'Barbell Bench Press',
    category: 'Chest',
    difficulty: 'Intermediate',
    targetMuscles: ['Pectoralis Major', 'Triceps', 'Anterior Deltoids'],
    duration: '4 Sets x 8-10 Reps',
    calories: '190 kcal',
    equipment: 'Barbell & Bench',
    image: '/images/bench-press.jpg',
    fallbackImage: '/images/pushups.jpg',
    description: 'The premier compound pressing movement for building upper-body hypertrophy, raw chest density, and horizontal pressing power.',
    steps: [
      'Lie flat on the bench with eyes directly under the racked barbell and feet planted firmly on the floor.',
      'Grip the bar slightly wider than shoulder-width, retract shoulder blades, and pull chest upward.',
      'Unrack bar and lower it with control to touch the mid-to-lower sternum with elbows at a 45-degree angle.',
      'Drive upward through the palms explosively until arms are extended, locking out without shrugging shoulders.'
    ]
  },
  {
    id: 'chest-2',
    name: 'Incline Dumbbell Press',
    category: 'Chest',
    difficulty: 'Intermediate',
    targetMuscles: ['Upper Chest (Clavicular Head)', 'Front Deltoids', 'Triceps'],
    duration: '4 Sets x 10-12 Reps',
    calories: '175 kcal',
    equipment: 'Dumbbells & Incline Bench',
    image: '/images/incline-dumbbell-press.jpg',
    fallbackImage: '/images/bench-press.jpg',
    description: 'Prioritizes the upper pectoral fibers using dumbbells to allow an unrestricted, joint-friendly range of motion and deep stretch.',
    steps: [
      'Set an adjustable bench to a 30 to 45-degree incline and sit with dumbbells resting on your knees.',
      'Kick weights up to your shoulders as you lie back, keeping shoulder blades pinched back.',
      'Press the dumbbells upward in a gentle converging arc, pausing just short of clicking them together.',
      'Lower the weights slowly over 2-3 seconds until you feel a deep stretch across your upper chest.'
    ]
  },
  {
    id: 'chest-3',
    name: 'Cable Crossover Flyes',
    category: 'Chest',
    difficulty: 'Beginner',
    targetMuscles: ['Lower Pecs', 'Sternal Pecs', 'Anterior Deltoids'],
    duration: '3 Sets x 12-15 Reps',
    calories: '130 kcal',
    equipment: 'Dual Cable Machine',
    image: '/images/cable-crossover-flyes.jpg',
    fallbackImage: '/images/bench-press.jpg',
    description: 'Maintains continuous mechanical tension through the inner and lower pectorals with peak contraction unmatched by free weights.',
    steps: [
      'Position cable pulleys at shoulder height and attach single D-handles.',
      'Step forward into a stable staggered stance, leaning torso slightly forward with core braced.',
      'With arms softly bent at the elbows, sweep handles together in front of your chest in a hugging motion.',
      'Squeeze your chest firmly for one second at peak contraction, then slowly open arms to a deep stretch.'
    ]
  },
  {
    id: 'chest-4',
    name: 'Parallel Bar Chest Dips',
    category: 'Chest',
    difficulty: 'Advanced',
    targetMuscles: ['Lower Chest', 'Triceps', 'Shoulders'],
    duration: '4 Sets x 8-12 Reps',
    calories: '195 kcal',
    equipment: 'Parallel Dip Station',
    image: '/images/parallel-bar-chest-dips.jpg',
    fallbackImage: '/images/pushups.jpg',
    description: 'One of the most potent mass-building bodyweight movements for lower pectorals and foundational upper-body pushing power.',
    steps: [
      'Mount the parallel dip bars, supporting your bodyweight with arms locked out.',
      'Lean torso forward at roughly 30 degrees and flare elbows slightly outward to target the chest.',
      'Lower body with control until elbows reach approximately 90 degrees and shoulders feel comfortable.',
      'Press forcefully through your palms back to the top position, squeezing the lower chest at the peak.'
    ]
  },
  {
    id: 'chest-5',
    name: 'Dumbbell Pullover',
    category: 'Chest',
    difficulty: 'Intermediate',
    targetMuscles: ['Pectoralis Major', 'Serratus Anterior', 'Lats'],
    duration: '3 Sets x 10-12 Reps',
    calories: '140 kcal',
    equipment: 'Dumbbell & Flat Bench',
    image: '/images/dumbbell-pullover.jpg',
    fallbackImage: '/images/dumbbells.jpg',
    description: 'Expands ribcage mobility while stretching and firing the pectoralis major, serratus anterior, and upper lats simultaneously.',
    steps: [
      'Lie perpendicular across a flat bench with upper back supported and hips positioned slightly below bench height.',
      'Hold a single dumbbell overhead with both hands forming a diamond cupped under the inner plate.',
      'Lower the dumbbell slowly backward in an arc behind your head, maintaining a slight elbow bend.',
      'Inhale deeply during the stretch, then contract chest and serratus to bring dumbbell back over chest.'
    ]
  },
  {
    id: 'chest-6',
    name: 'Decline Barbell Bench Press',
    category: 'Chest',
    difficulty: 'Intermediate',
    targetMuscles: ['Lower Pectorals', 'Triceps', 'Front Delts'],
    duration: '3 Sets x 8-10 Reps',
    calories: '165 kcal',
    equipment: 'Decline Bench & Barbell',
    image: '/images/bench-press.jpg',
    fallbackImage: '/images/pushups.jpg',
    description: 'Shifts mechanical leverage to isolate the lower sternal head of the pectorals with reduced anterior shoulder strain.',
    steps: [
      'Secure shins under the padded rollers on a decline bench set between 15 and 30 degrees.',
      'Grasp barbell with an overhand grip slightly wider than shoulder-width and unrack the weight.',
      'Lower the bar smoothly until it gently touches the bottom edge of your pectoral line.',
      'Drive the bar straight upward until elbows lock out, contracting the lower chest.'
    ]
  },
  {
    id: 'chest-7',
    name: 'Standard & Deficit Push-Ups',
    category: 'Chest',
    difficulty: 'Beginner',
    targetMuscles: ['Pectoralis Major', 'Triceps', 'Core Stabilizers'],
    duration: '4 Sets x 15-20 Reps',
    calories: '125 kcal',
    equipment: 'Bodyweight',
    image: '/images/standard-deficit-pushups.jpg',
    fallbackImage: '/images/bench-press.jpg',
    description: 'The bedrock calisthenic pushing pattern for chest hypertrophy, scapular protraction, and core endurance.',
    steps: [
      'Place hands slightly wider than shoulder-width on the floor with fingers spread wide.',
      'Form a straight line from heels through glutes and head, keeping core braced.',
      'Lower chest until it hovers an inch above floor, keeping elbows angled back at 45 degrees.',
      'Push the floor away dynamically back to starting position without arching the lower back.'
    ]
  },
  {
    id: 'chest-8',
    name: 'Flat Dumbbell Chest Flyes',
    category: 'Chest',
    difficulty: 'Beginner',
    targetMuscles: ['Pectoralis Major (Sternal Head)', 'Anterior Deltoids'],
    duration: '3 Sets x 12-15 Reps',
    calories: '130 kcal',
    equipment: 'Dumbbells & Flat Bench',
    image: '/images/cable-crossover-flyes.jpg',
    fallbackImage: '/images/bench-press.jpg',
    description: 'Opens up the chest wall under load to provide an unparalleled deep stretch across pectoral muscle fibers.',
    steps: [
      'Lie flat on bench holding dumbbells directly over chest with elbows softly bent.',
      'Lower weights out wide in a slow, controlled hugging arc until you feel a deep pectoral stretch.',
      'Keep elbow angle fixed throughout the descent to protect shoulder joints.',
      'Contract chest muscles to bring dumbbells back together over sternum, squeezing at peak.'
    ]
  },
  {
    id: 'chest-9',
    name: 'Incline Barbell Bench Press',
    category: 'Chest',
    difficulty: 'Intermediate',
    targetMuscles: ['Upper Chest (Clavicular Head)', 'Front Delts', 'Triceps'],
    duration: '4 Sets x 8-10 Reps',
    calories: '180 kcal',
    equipment: 'Barbell & Incline Bench',
    image: '/images/incline-dumbbell-press.jpg',
    fallbackImage: '/images/bench-press.jpg',
    description: 'The classic compound builder for upper chest shelf thickness, collarbone fill, and overhead stability.',
    steps: [
      'Set incline bench between 30 and 45 degrees and lie with eyes beneath the racked barbell.',
      'Grip bar slightly wider than shoulder-width, squeeze shoulder blades together and unrack.',
      'Lower bar with control until it touches your upper chest just below the clavicle.',
      'Drive the barbell forcefully straight up to arm lockout, driving through heels.'
    ]
  },
  {
    id: 'chest-10',
    name: 'Pec Deck / Machine Flyes',
    category: 'Chest',
    difficulty: 'Beginner',
    targetMuscles: ['Pectoralis Major (Inner Chest / Sternum Line)'],
    duration: '3 Sets x 12-15 Reps',
    calories: '120 kcal',
    equipment: 'Pec Deck Machine',
    image: '/images/cable-crossover-flyes.jpg',
    fallbackImage: '/images/bench-press.jpg',
    description: 'Maintains constant rotational tension through peak horizontal adduction, isolating chest without wrist or elbow strain.',
    steps: [
      'Adjust seat height so handles align directly with the center of your chest.',
      'Sit back flush against the pad, gripping handles with forearms parallel to floor.',
      'Bring handles together in front of chest in a smooth arc, pausing for a 1-second peak squeeze.',
      'Return slowly back under tension until elbows align with torso, resisting the weight stack.'
    ]
  },

  // ==========================================
  // 2. BACK (10 Exercises)
  // ==========================================
  {
    id: 'back-1',
    name: 'Conventional Barbell Deadlift',
    category: 'Back',
    difficulty: 'Advanced',
    targetMuscles: ['Latissimus Dorsi', 'Erector Spinae', 'Traps', 'Glutes'],
    duration: '4 Sets x 5 Reps',
    calories: '260 kcal',
    equipment: 'Barbell & Bumper Plates',
    image: '/images/deadlifts.jpg',
    fallbackImage: '/images/pullups.jpg',
    description: 'The ultimate posterior chain lift, developing dense spinal erectors, wide upper back musculature, and systemic pulling power.',
    steps: [
      'Stand with feet hip-width apart and barbell resting over your midfoot.',
      'Hinge at hips and grip the bar just outside your knees with an overhand or mixed grip.',
      'Pull your chest tall, retract lats tightly, and take the tension out of the barbell.',
      'Drive the floor away through your heels, keeping bar close to your shins until standing tall with locked hips.'
    ]
  },
  {
    id: 'back-2',
    name: 'Wide-Grip Lat Pulldown',
    category: 'Back',
    difficulty: 'Beginner',
    targetMuscles: ['Latissimus Dorsi', 'Teres Major', 'Biceps'],
    duration: '4 Sets x 10-12 Reps',
    calories: '160 kcal',
    equipment: 'Cable Lat Pulldown Machine',
    image: '/images/lat-pulldown.jpg',
    fallbackImage: '/images/pullups.jpg',
    description: 'Builds back width and the classic V-taper taper by emphasizing vertical pull mechanics with controlled tempo.',
    steps: [
      'Sit facing the pulldown machine and adjust the thigh pads so legs are locked firmly in place.',
      'Grip the long lat bar wide with an overhand grip, lean back 10 degrees, and lift chest.',
      'Pull the bar down to collarbone height by driving your elbows straight down toward your ribs.',
      'Pause to squeeze back muscles, then allow bar to rise smoothly under tension to full lat stretch.'
    ]
  },
  {
    id: 'back-3',
    name: 'Bent-Over Barbell Rows',
    category: 'Back',
    difficulty: 'Intermediate',
    targetMuscles: ['Mid-Back', 'Rhomboids', 'Lats', 'Posterior Deltoids'],
    duration: '4 Sets x 8-10 Reps',
    calories: '190 kcal',
    equipment: 'Barbell',
    image: '/images/bent-over-rows.jpg',
    fallbackImage: '/images/deadlifts.jpg',
    description: 'A premier compound horizontal pulling exercise that builds unrivaled density, mid-back thickness, and spinal endurance.',
    steps: [
      'Hinge forward at your hips until torso is roughly 45 degrees relative to the floor, knees soft.',
      'Hold barbell with an overhand grip slightly wider than your knees, arms hanging straight down.',
      'Row the barbell up into your lower belly button by driving your elbows backward.',
      'Squeeze shoulder blades together firmly at the peak before lowering the weight smoothly.'
    ]
  },
  {
    id: 'back-4',
    name: 'Seated Cable Rows',
    category: 'Back',
    difficulty: 'Beginner',
    targetMuscles: ['Rhomboids', 'Middle Traps', 'Latissimus Dorsi'],
    duration: '3 Sets x 10-12 Reps',
    calories: '145 kcal',
    equipment: 'Low Cable Row Machine',
    image: '/images/seated-cable-rows.jpg',
    fallbackImage: '/images/pullups.jpg',
    description: 'Provides uniform horizontal pulling resistance to balance forward shoulder posture and develop mid-back detail.',
    steps: [
      'Sit on machine bench with feet pressed against footpads and knees slightly bent.',
      'Grip V-bar handle, keep spine neutral and sit tall without hyperextending lower back.',
      'Pull handle toward your lower stomach while driving elbows back and pinching shoulder blades.',
      'Pause at full contraction, then slowly extend arms forward until back muscles feel fully stretched.'
    ]
  },
  {
    id: 'back-5',
    name: 'Strict Overhand Pull-Ups',
    category: 'Back',
    difficulty: 'Advanced',
    targetMuscles: ['Lats', 'Upper Back', 'Brachialis', 'Core'],
    duration: '4 Sets x 6-10 Reps',
    calories: '170 kcal',
    equipment: 'Pull-up Bar',
    image: '/images/strict-pullups.jpg',
    fallbackImage: '/images/deadlifts.jpg',
    description: 'The benchmark bodyweight pulling movement for true relative upper body strength, scapular mobility, and lat width.',
    steps: [
      'Hang from the overhead bar using a pronated overhand grip slightly wider than shoulder-width.',
      'Initiate movement by actively depressing shoulder blades down and back.',
      'Pull chest up toward the bar by driving elbows down to your sides until chin clears the bar.',
      'Lower body smoothly under full eccentric control until arms are straight in an active dead hang.'
    ]
  },
  {
    id: 'back-6',
    name: 'Single-Arm Dumbbell Row',
    category: 'Back',
    difficulty: 'Intermediate',
    targetMuscles: ['Unilateral Lats', 'Rhomboids', 'Rear Delts', 'Core'],
    duration: '3 Sets x 10-12 Reps each side',
    calories: '155 kcal',
    equipment: 'Dumbbell & Flat Bench',
    image: '/images/dumbbells.jpg',
    fallbackImage: '/images/deadlifts.jpg',
    description: 'Isolates each lat independently, eliminating strength asymmetries while allowing an extended stretch at the bottom.',
    steps: [
      'Place one knee and matching hand firmly on a flat bench to support horizontal spine alignment.',
      'Hold a dumbbell in opposite hand, letting arm hang perpendicular to the floor.',
      'Row the dumbbell back toward your hip in a smooth arc, keeping elbow tucked close to your ribs.',
      'Contract your lat hard at peak elevation, then lower the dumbbell with controlled cadence.'
    ]
  },
  {
    id: 'back-7',
    name: 'Hyperextensions (Back Extensions)',
    category: 'Back',
    difficulty: 'Beginner',
    targetMuscles: ['Erector Spinae', 'Gluteus Maximus', 'Hamstrings'],
    duration: '3 Sets x 12-15 Reps',
    calories: '120 kcal',
    equipment: '45-Degree Hyperextension Bench',
    image: '/images/hyperextensions.jpg',
    fallbackImage: '/images/deadlifts.jpg',
    description: 'Strengthens the lumbar spine and lower posterior chain, safeguarding the lower back against stiffness and lifting fatigue.',
    steps: [
      'Lock ankles under the rear roller pads of the hyperextension bench with hips resting on the upper cushion.',
      'Cross your arms across your chest, keeping head neutral with spine.',
      'Hinge forward at hips until torso reaches a 90-degree fold relative to your legs.',
      'Raise your torso by engaging glutes and spinal erectors until your body forms a straight line.'
    ]
  },
  {
    id: 'back-8',
    name: 'T-Bar Rows (Chest-Supported or Landmine)',
    category: 'Back',
    difficulty: 'Intermediate',
    targetMuscles: ['Middle Traps', 'Rhomboids', 'Latissimus Dorsi', 'Rear Delts'],
    duration: '4 Sets x 8-10 Reps',
    calories: '175 kcal',
    equipment: 'T-Bar Row Station or Landmine',
    image: '/images/bent-over-rows.jpg',
    fallbackImage: '/images/deadlifts.jpg',
    description: 'Heavy neutral-grip pulling pattern that builds extreme mid-back thickness and dense spinal erector stability.',
    steps: [
      'Straddle the bar with feet shoulder-width, hinging hips back with a 45-degree back angle.',
      'Take a firm neutral grip on handles and brace core to stabilize the spine.',
      'Pull the bar smoothly into your upper abdomen, driving elbows high behind your back.',
      'Squeeze shoulder blades tightly together at the top, then lower with control to a full stretch.'
    ]
  },
  {
    id: 'back-9',
    name: 'Straight-Arm Cable Lat Pulldowns',
    category: 'Back',
    difficulty: 'Beginner',
    targetMuscles: ['Latissimus Dorsi (Outer Flare)', 'Teres Major', 'Core'],
    duration: '3 Sets x 12-15 Reps',
    calories: '130 kcal',
    equipment: 'Cable Machine & Straight/Lat Bar',
    image: '/images/lat-pulldown.jpg',
    fallbackImage: '/images/pullups.jpg',
    description: 'True single-joint lat isolation that eliminates bicep fatigue to maximize outer back width and mind-muscle connection.',
    steps: [
      'Stand facing a high pulley gripping bar overhand with shoulder-width hands and slight forward hip hinge.',
      'Keep arms straight with a soft bend at elbows throughout the movement.',
      'Pull the bar downward in a wide arc until it meets your upper thighs.',
      'Squeeze lats intensely at the bottom, then slowly guide bar back overhead to ear height.'
    ]
  },
  {
    id: 'back-10',
    name: 'Chest-Supported Incline Dumbbell Rows',
    category: 'Back',
    difficulty: 'Intermediate',
    targetMuscles: ['Rhomboids', 'Mid Traps', 'Rear Delts', 'Lats'],
    duration: '4 Sets x 10-12 Reps',
    calories: '155 kcal',
    equipment: 'Incline Bench & Dumbbells',
    image: '/images/bent-over-rows.jpg',
    fallbackImage: '/images/dumbbells.jpg',
    description: 'Takes lower back fatigue completely out of the equation to isolate the upper back and rhomboids with zero momentum.',
    steps: [
      'Lie face down on a 30 to 45-degree incline bench with feet planted and dumbbells hanging freely.',
      'Retract shoulder blades and pull dumbbells toward hips, flaring elbows out slightly.',
      'Pinch shoulder blades firmly at peak contraction for one second.',
      'Lower weights slowly until arms are fully extended and back is softly stretched.'
    ]
  },

  // ==========================================
  // 3. SHOULDER (10 Exercises)
  // ==========================================
  {
    id: 'shoulder-1',
    name: 'Overhead Barbell Military Press',
    category: 'Shoulder',
    difficulty: 'Advanced',
    targetMuscles: ['Anterior Deltoids', 'Lateral Deltoids', 'Triceps', 'Upper Traps'],
    duration: '4 Sets x 6-8 Reps',
    calories: '185 kcal',
    equipment: 'Barbell',
    image: '/images/shoulder-press.jpg',
    fallbackImage: '/images/dumbbells.jpg',
    description: 'The premier standing overhead pressing movement for raw shoulder power, vertical pressing mass, and shoulder cap density.',
    steps: [
      'Stand tall with feet shoulder-width apart, resting barbell across upper chest with vertical forearms.',
      'Squeeze glutes and core to create an unwavering structural base.',
      'Press the bar vertically overhead, tilting head slightly back to clear chin, then pushing head through at lockout.',
      'Hold overhead lockout for half a second before lowering barbell under control back to clavicles.'
    ]
  },
  {
    id: 'shoulder-2',
    name: 'Seated Dumbbell Shoulder Press',
    category: 'Shoulder',
    difficulty: 'Intermediate',
    targetMuscles: ['Front & Middle Delts', 'Triceps', 'Upper Chest'],
    duration: '4 Sets x 8-10 Reps',
    calories: '160 kcal',
    equipment: 'Dumbbells & 90-Degree Bench',
    image: '/images/seated-dumbbell-press.jpg',
    fallbackImage: '/images/shoulder-press.jpg',
    description: 'Builds round boulder shoulders with back support to eliminate cheating momentum and isolate anterior and lateral delts.',
    steps: [
      'Sit upright on an exercise bench with back pad set at 80-90 degrees, dumbbells at shoulder height.',
      'Inhale, brace your core, and press weights upward in a smooth arc overhead.',
      'Stop just before dumbbells touch to maintain continuous tension on the deltoids.',
      'Lower the weights slowly over 3 seconds until elbows bend past 90 degrees.'
    ]
  },
  {
    id: 'shoulder-3',
    name: 'Dumbbell Lateral Raises',
    category: 'Shoulder',
    difficulty: 'Beginner',
    targetMuscles: ['Lateral Deltoids (Side Delts)'],
    duration: '4 Sets x 12-15 Reps',
    calories: '125 kcal',
    equipment: 'Dumbbells',
    image: '/images/lateral-raises.jpg',
    fallbackImage: '/images/dumbbells.jpg',
    description: 'The most essential exercise for building side deltoid width, creating broad athletic shoulders and an aesthetic V-shape.',
    steps: [
      'Stand with feet hip-width apart, holding dumbbells at sides with a slight elbow bend.',
      'Raise arms out to sides leading with your elbows until dumbbells reach shoulder height.',
      'Keep pinkies slightly higher than thumbs at peak to maximize lateral head activation.',
      'Control the descent slowly back down without letting dumbbells swing or bounce off thighs.'
    ]
  },
  {
    id: 'shoulder-4',
    name: 'Face Pulls with Rope',
    category: 'Shoulder',
    difficulty: 'Beginner',
    targetMuscles: ['Posterior Deltoids', 'Rotator Cuff', 'Rhomboids'],
    duration: '4 Sets x 15 Reps',
    calories: '115 kcal',
    equipment: 'Cable Machine & Rope Attachment',
    image: '/images/face-pulls.jpg',
    fallbackImage: '/images/shoulder-press.jpg',
    description: 'An imperative posture and shoulder health movement targeting rear delts and external rotators to balance heavy pressing.',
    steps: [
      'Set cable pulley to eye height and attach a two-pronged rope.',
      'Grasp rope ends with thumbs pointed backward and step back into a staggered stance.',
      'Pull the center of rope directly toward eye level while actively pulling the rope ends outward.',
      'Externally rotate shoulders at the finish so knuckles point toward the ceiling, pausing for 1 second.'
    ]
  },
  {
    id: 'shoulder-5',
    name: 'Arnold Dumbbell Press',
    category: 'Shoulder',
    difficulty: 'Intermediate',
    targetMuscles: ['All 3 Deltoid Heads (Front, Side, Rear)'],
    duration: '3 Sets x 10-12 Reps',
    calories: '150 kcal',
    equipment: 'Dumbbells',
    image: '/images/arnold-press.jpg',
    fallbackImage: '/images/seated-dumbbell-press.jpg',
    description: 'Rotational overhead pressing variation engineered to stimulate all three deltoid heads through an extended arc of motion.',
    steps: [
      'Hold dumbbells at chin height in front of you with palms facing your chest, elbows tucked.',
      'Press dumbbells upward while rotating your wrists outward so palms face forward at top.',
      'Complete the vertical press into full overhead lockout.',
      'Reverse the rotational motion slowly as you lower the weights back to the starting chin level.'
    ]
  },
  {
    id: 'shoulder-6',
    name: 'Bent-Over Rear Delt Flyes',
    category: 'Shoulder',
    difficulty: 'Beginner',
    targetMuscles: ['Rear Deltoids', 'Infraspinatus', 'Upper Back'],
    duration: '3 Sets x 12-15 Reps',
    calories: '110 kcal',
    equipment: 'Dumbbells',
    image: '/images/rear-delt-flyes.jpg',
    fallbackImage: '/images/dumbbells.jpg',
    description: 'Isolates the posterior deltoid head to give the shoulder a complete 3-dimensional spherical shape and counter rounded shoulders.',
    steps: [
      'Hinge at hips until torso is nearly parallel to floor with knees softly bent and spine flat.',
      'Let dumbbells hang directly beneath your chest with palms facing each other.',
      'Raise arms out to the sides with elbows softly bent in a reverse fly motion.',
      'Pinch rear delts tightly at the top for a count, then lower weights with zero swinging.'
    ]
  },
  {
    id: 'shoulder-7',
    name: 'Front Plate / Barbell Raises',
    category: 'Shoulder',
    difficulty: 'Beginner',
    targetMuscles: ['Anterior Deltoids (Front Delts)'],
    duration: '3 Sets x 12-15 Reps',
    calories: '115 kcal',
    equipment: 'Weight Plate or Barbell',
    image: '/images/front-plate-raise.jpg',
    fallbackImage: '/images/shoulder-press.jpg',
    description: 'Strict isolation movement targeting the front deltoid fibers to build fullness in the anterior shoulder line.',
    steps: [
      'Stand upright holding a weight plate at the 9 and 3 o clock position (or a light barbell) across thighs.',
      'Keep arms extended with a soft elbow bend and brace core to eliminate leaning.',
      'Raise the weight directly forward and upward until it reaches eye level.',
      'Hold for a split second, then lower smoothly back to thighs along the same trajectory.'
    ]
  },
  {
    id: 'shoulder-8',
    name: 'Barbell Upright Rows',
    category: 'Shoulder',
    difficulty: 'Intermediate',
    targetMuscles: ['Lateral Deltoids', 'Upper Trapezius', 'Biceps'],
    duration: '4 Sets x 10-12 Reps',
    calories: '140 kcal',
    equipment: 'EZ-Bar or Barbell',
    image: '/images/shoulder-press.jpg',
    fallbackImage: '/images/dumbbells.jpg',
    description: 'Vertical pulling compound that targets the side delts and upper traps for broad, athletic V-taper shoulders.',
    steps: [
      'Stand tall holding bar in front of thighs with an overhand grip slightly wider than shoulder-width.',
      'Lead with elbows as you pull the bar vertically up along your torso toward chest height.',
      'Keep elbows higher than forearms at all times during the pull.',
      'Pause briefly at mid-chest level before lowering the weight under strict control.'
    ]
  },
  {
    id: 'shoulder-9',
    name: 'Single-Arm Cable Lateral Raises',
    category: 'Shoulder',
    difficulty: 'Beginner',
    targetMuscles: ['Lateral Deltoids (Side Delts)'],
    duration: '3 Sets x 12-15 Reps each side',
    calories: '115 kcal',
    equipment: 'Low Cable Pulley & D-Handle',
    image: '/images/lateral-raises.jpg',
    fallbackImage: '/images/dumbbells.jpg',
    description: 'Maintains constant mechanical tension at the bottom of the movement where dumbbells provide zero resistance, maximizing lateral delt growth.',
    steps: [
      'Set cable pulley to lowest position and stand sideways to machine, gripping handle across body.',
      'Keep a slight forward lean and soft elbow bend.',
      'Raise arm outward and up in a wide arc until hand reaches shoulder height.',
      'Hold side delt contraction for one second before lowering weight under tension back across body.'
    ]
  },
  {
    id: 'shoulder-10',
    name: 'Reverse Pec Deck / Rear Delt Flyes',
    category: 'Shoulder',
    difficulty: 'Beginner',
    targetMuscles: ['Posterior Deltoids (Rear Delts)', 'Rhomboids'],
    duration: '4 Sets x 12-15 Reps',
    calories: '120 kcal',
    equipment: 'Rear Delt Flye Machine',
    image: '/images/rear-delt-flyes.jpg',
    fallbackImage: '/images/face-pulls.jpg',
    description: 'Isolates the often neglected rear deltoid head to ensure complete 3D shoulder roundness and bulletproof rotator cuff health.',
    steps: [
      'Sit facing the chest pad with seat adjusted so handles are directly at shoulder height.',
      'Grasp handles with palms facing inward and arms nearly straight.',
      'Pull handles backward in a horizontal semicircle until hands are in line with shoulders.',
      'Squeeze rear delts hard without excessive scapular squeezing, then return slowly to starting position.'
    ]
  },

  // ==========================================
  // 4. BICEPS (10 Exercises)
  // ==========================================
  {
    id: 'biceps-1',
    name: 'Standing Barbell Bicep Curls',
    category: 'Biceps',
    difficulty: 'Beginner',
    targetMuscles: ['Biceps Brachii (Short & Long Head)', 'Brachialis', 'Forearms'],
    duration: '4 Sets x 8-10 Reps',
    calories: '140 kcal',
    equipment: 'Barbell or EZ-Curl Bar',
    image: '/images/barbell-bicep-curls.jpg',
    fallbackImage: '/images/dumbbells.jpg',
    description: 'The undisputed mass builder for arm development, maximizing progressive overload across both heads of the bicep.',
    steps: [
      'Stand with feet shoulder-width apart, holding a barbell with an underhand grip at hip height.',
      'Glue elbows to your sides and brace abdominal wall to prevent spinal sway.',
      'Curl the barbell upward by flexing biceps until bar reaches upper chest height.',
      'Squeeze biceps forcefully at peak, then lower bar through a strict 3-second negative.'
    ]
  },
  {
    id: 'biceps-2',
    name: 'Incline Dumbbell Bicep Curls',
    category: 'Biceps',
    difficulty: 'Intermediate',
    targetMuscles: ['Long Head of Biceps (Bicep Peak)', 'Brachialis'],
    duration: '4 Sets x 10-12 Reps',
    calories: '135 kcal',
    equipment: 'Dumbbells & Incline Bench',
    image: '/images/incline-bicep-curls.jpg',
    fallbackImage: '/images/dumbbells.jpg',
    description: 'The angled torso places the long head of the bicep under a profound stretch, triggering targeted hypertrophy for higher peaks.',
    steps: [
      'Set an adjustable bench to a 45-degree angle and lie back with arms hanging down.',
      'Hold dumbbells with palms forward and shoulders pressed into the backrest.',
      'Curl the dumbbells upward while keeping elbows stationary and pointed at floor.',
      'Squeeze biceps hard at peak, then lower slowly into a full, deep stretch at the bottom.'
    ]
  },
  {
    id: 'biceps-3',
    name: 'Standing Hammer Curls',
    category: 'Biceps',
    difficulty: 'Beginner',
    targetMuscles: ['Brachialis', 'Brachioradialis', 'Outer Biceps'],
    duration: '4 Sets x 10-12 Reps',
    calories: '130 kcal',
    equipment: 'Dumbbells',
    image: '/images/dumbbells.jpg',
    fallbackImage: '/images/barbell-bicep-curls.jpg',
    description: 'Utilizes a neutral grip to target the brachialis muscle underneath the bicep, pushing arm width and strengthening forearms.',
    steps: [
      'Stand tall holding dumbbells by your sides with palms facing inward toward each other.',
      'Keeping elbows stationary by your waist, curl dumbbells upward toward your front shoulders.',
      'Maintain the neutral hammer grip throughout without rotating the wrists.',
      'Pause at top contraction, then lower under strict control to full arm extension.'
    ]
  },
  {
    id: 'biceps-4',
    name: 'Preacher Curls (EZ-Bar)',
    category: 'Biceps',
    difficulty: 'Intermediate',
    targetMuscles: ['Short Head of Biceps (Inner Bicep Thickness)'],
    duration: '3 Sets x 10-12 Reps',
    calories: '125 kcal',
    equipment: 'Preacher Bench & EZ-Bar',
    image: '/images/preacher-curls.jpg',
    fallbackImage: '/images/barbell-bicep-curls.jpg',
    description: 'Locks upper arms against an angled pad to eliminate momentum, isolating the short head of the biceps for thick fullness.',
    steps: [
      'Sit at the preacher bench and position triceps flush against the slanted cushion.',
      'Grasp the inner cambered handles of the EZ-bar with an underhand grip.',
      'Curl bar upward until forearms reach near vertical, flexing biceps hard.',
      'Lower the weight slowly, stopping just short of hyperextending elbows at the bottom.'
    ]
  },
  {
    id: 'biceps-5',
    name: 'Concentration Curls',
    category: 'Biceps',
    difficulty: 'Beginner',
    targetMuscles: ['Bicep Peak', 'Brachialis'],
    duration: '3 Sets x 12 Reps each arm',
    calories: '110 kcal',
    equipment: 'Dumbbell & Flat Bench',
    image: '/images/concentration-curls.jpg',
    fallbackImage: '/images/dumbbells.jpg',
    description: 'A high-EMG isolation curl that anchors the elbow against the inner thigh for ultimate mind-muscle peak contraction.',
    steps: [
      'Sit on a bench with feet wide and rest your elbow against the inner thigh of the same side.',
      'Hold a dumbbell with arm hanging down fully extended toward the floor.',
      'Curl the weight upward toward your face while keeping the upper arm firmly stationary.',
      'Hold peak contraction for a solid count before lowering smoothly under control.'
    ]
  },
  {
    id: 'biceps-6',
    name: 'Cable Rope Hammer Curls',
    category: 'Biceps',
    difficulty: 'Beginner',
    targetMuscles: ['Brachialis', 'Forearms', 'Outer Biceps'],
    duration: '3 Sets x 12-15 Reps',
    calories: '120 kcal',
    equipment: 'Cable Machine & Rope Attachment',
    image: '/images/cable-hammer-curls.jpg',
    fallbackImage: '/images/barbell-bicep-curls.jpg',
    description: 'Provides non-slack cable resistance throughout the entire motion, allowing rope spreading at the top for maximum pump.',
    steps: [
      'Attach rope to low pulley and grip ends with neutral palms facing inward.',
      'Keep elbows tucked at sides and curl rope upward toward upper chest.',
      'Spread the rope tips apart at the top to accentuate brachialis and outer forearm recruitment.',
      'Lower weight smoothly against constant cable resistance back to full arm lockout.'
    ]
  },
  {
    id: 'biceps-7',
    name: 'Incline Chest-Supported Spider Curls',
    category: 'Biceps',
    difficulty: 'Intermediate',
    targetMuscles: ['Short Head (Inner Biceps)', 'Brachialis'],
    duration: '3 Sets x 10-12 Reps',
    calories: '120 kcal',
    equipment: 'Incline Bench & Dumbbells',
    image: '/images/spider-curls.jpg',
    fallbackImage: '/images/barbell-bicep-curls.jpg',
    description: 'Resting chest against an incline bench forces arms into a forward vertical hang, generating ruthless peak contraction.',
    steps: [
      'Lie face down on a 45-degree incline bench with feet anchored on the floor.',
      'Let arms hang perpendicular to the floor holding dumbbells with palms facing upward.',
      'Curl weights upward without moving upper arms backward or using body swing.',
      'Squeeze inner biceps intensely at peak, then lower slowly into complete dead-hang extension.'
    ]
  },
  {
    id: 'biceps-8',
    name: 'Underhand Chin-Ups',
    category: 'Biceps',
    difficulty: 'Advanced',
    targetMuscles: ['Biceps Brachii', 'Brachialis', 'Latissimus Dorsi'],
    duration: '4 Sets x 8-10 Reps',
    calories: '175 kcal',
    equipment: 'Pull-Up Bar',
    image: '/images/pullups.jpg',
    fallbackImage: '/images/barbell-bicep-curls.jpg',
    description: 'The heaviest compound bodyweight overload for biceps, combining massive pulling power with deep elbow flexion.',
    steps: [
      'Grip pull-up bar with a supinated (palms facing you) shoulder-width grip.',
      'Hang at full extension with core braced and legs crossed.',
      'Pull body upward by flexing biceps and driving elbows down until chin clears the bar.',
      'Pause at the peak to squeeze biceps, then lower with full 3-second control back to dead hang.'
    ]
  },
  {
    id: 'biceps-9',
    name: 'Cable High Bicep Curls (Hercules Curls)',
    category: 'Biceps',
    difficulty: 'Intermediate',
    targetMuscles: ['Biceps Brachii (Short Head & Peak)'],
    duration: '3 Sets x 12-15 Reps',
    calories: '125 kcal',
    equipment: 'Dual Cable Pulley Station',
    image: '/images/cable-hammer-curls.jpg',
    fallbackImage: '/images/bicep-curls.jpg',
    description: 'Performed between two high pulleys with upper arms parallel to floor, placing the biceps into maximal shortened peak contraction.',
    steps: [
      'Stand centered between two high pulleys gripping stirrup handles with arms outstretched to sides.',
      'Keep upper arms stationary at shoulder height throughout the exercise.',
      'Curl handles inward toward ears, flexing biceps with maximum intensity at the peak.',
      'Return handles outward slowly under smooth resistance back to full arm extension.'
    ]
  },
  {
    id: 'biceps-10',
    name: 'Reverse-Grip Barbell Curls',
    category: 'Biceps',
    difficulty: 'Beginner',
    targetMuscles: ['Brachioradialis', 'Brachialis', 'Forearm Extensors'],
    duration: '3 Sets x 10-12 Reps',
    calories: '115 kcal',
    equipment: 'EZ-Bar or Straight Barbell',
    image: '/images/barbell-bicep-curls.jpg',
    fallbackImage: '/images/bicep-curls.jpg',
    description: 'Pronated grip shifts primary load to the brachioradialis and brachialis, dramatically thickening the upper forearm and outer arm.',
    steps: [
      'Stand tall holding an EZ-bar or barbell with an overhand (pronated) shoulder-width grip.',
      'Pin elbows to sides and curl bar upward toward chest without letting wrists bend backward.',
      'Squeeze top of forearms and outer biceps at peak elevation.',
      'Lower bar slowly under strict eccentric control back to thighs.'
    ]
  },

  // ==========================================
  // 5. TRICEPS (10 Exercises)
  // ==========================================
  {
    id: 'triceps-1',
    name: 'Close-Grip Barbell Bench Press',
    category: 'Triceps',
    difficulty: 'Intermediate',
    targetMuscles: ['Triceps Brachii (All 3 Heads)', 'Inner Chest', 'Front Delts'],
    duration: '4 Sets x 8-10 Reps',
    calories: '180 kcal',
    equipment: 'Barbell & Flat Bench',
    image: '/images/close-grip-bench.jpg',
    fallbackImage: '/images/pushups.jpg',
    description: 'The premier compound mass-building exercise for thick triceps, enabling heavy overload across all three triceps heads.',
    steps: [
      'Lie flat on bench and take an overhand grip roughly shoulder-width apart (avoid placing hands too close).',
      'Unrack bar and lower it with control toward your lower sternum while tucking elbows close to your torso.',
      'Pause lightly on chest without bouncing the weight.',
      'Drive bar upward by extending triceps forcefully until arms lock out at the top.'
    ]
  },
  {
    id: 'triceps-2',
    name: 'Skull Crushers (Lying Triceps Extensions)',
    category: 'Triceps',
    difficulty: 'Intermediate',
    targetMuscles: ['Long Head & Medial Head of Triceps'],
    duration: '4 Sets x 10-12 Reps',
    calories: '145 kcal',
    equipment: 'EZ-Bar & Flat Bench',
    image: '/images/skull-crushers.jpg',
    fallbackImage: '/images/bench-press.jpg',
    description: 'Deeply isolates the long head of the triceps by placing it into a stretch position behind the crown of the head.',
    steps: [
      'Lie on a flat bench holding an EZ-bar over your chest with arms straight and tilted slightly backward.',
      'Keep upper arms angled back toward your head and bend only at the elbows.',
      'Lower the bar slowly until it passes just above your forehead or bench edge.',
      'Extend your forearms back up explosively, locking out triceps at the peak.'
    ]
  },
  {
    id: 'triceps-3',
    name: 'Triceps Cable Rope Pushdowns',
    category: 'Triceps',
    difficulty: 'Beginner',
    targetMuscles: ['Lateral Head (Outer Horseshoe)', 'Medial Head'],
    duration: '4 Sets x 12-15 Reps',
    calories: '130 kcal',
    equipment: 'Cable Machine & Rope Attachment',
    image: '/images/triceps-pushdown.jpg',
    fallbackImage: '/images/pushups.jpg',
    description: 'Sculpts the lateral tricep horseshoe with continuous tension, allowing wrist flare at lockout for peak muscle contraction.',
    steps: [
      'Hook a rope attachment to the top cable pulley and grip handles with palms facing each other.',
      'Tuck elbows snugly against your sides and lean torso slightly forward from hips.',
      'Push rope straight downward until arms are fully extended, then spread handles apart at bottom.',
      'Return rope smoothly until forearms are parallel to floor before initiating next rep.'
    ]
  },
  {
    id: 'triceps-4',
    name: 'Overhead Dumbbell Triceps Extension',
    category: 'Triceps',
    difficulty: 'Beginner',
    targetMuscles: ['Triceps Long Head', 'Elbow Stabilizers'],
    duration: '3 Sets x 10-12 Reps',
    calories: '135 kcal',
    equipment: 'Single Heavy Dumbbell',
    image: '/images/overhead-triceps-extension.jpg',
    fallbackImage: '/images/dumbbells.jpg',
    description: 'The overhead position places the long head on deep stretch, unlocking maximum hypertrophy for the back of the upper arm.',
    steps: [
      'Sit or stand tall holding one heavy dumbbell overhead with both palms cupping the underside of the top plate.',
      'Keep upper arms close to your ears pointing vertically toward ceiling.',
      'Lower dumbbell slowly behind head by flexing elbows until a deep triceps stretch is achieved.',
      'Press the weight back overhead until elbows are fully extended, flexing triceps at peak.'
    ]
  },
  {
    id: 'triceps-5',
    name: 'Parallel Bar Triceps Dips',
    category: 'Triceps',
    difficulty: 'Advanced',
    targetMuscles: ['Triceps Brachii', 'Anterior Deltoids', 'Lower Chest'],
    duration: '4 Sets x 8-12 Reps',
    calories: '175 kcal',
    equipment: 'Parallel Dip Station',
    image: '/images/parallel-bar-dips.jpg',
    fallbackImage: '/images/pushups.jpg',
    description: 'An upright bodyweight compound pressing exercise that develops dense tricep lockout power and arm thickness.',
    steps: [
      'Mount dip bars and extend arms fully, keeping torso upright (do not lean forward).',
      'Tuck elbows tightly against your ribs as you descend.',
      'Lower body until elbows reach a 90-degree bend.',
      'Push forcefully straight down through your palms to return to full tricep lockout.'
    ]
  },
  {
    id: 'triceps-6',
    name: 'Bench Dips',
    category: 'Triceps',
    difficulty: 'Beginner',
    targetMuscles: ['Triceps Brachii', 'Front Delts'],
    duration: '3 Sets x 12-15 Reps',
    calories: '110 kcal',
    equipment: 'Exercise Bench or Sturdy Box',
    image: '/images/bench-dips.jpg',
    fallbackImage: '/images/pushups.jpg',
    description: 'An approachable bodyweight exercise that builds endurance, tones the back of the arms, and delivers a great triceps pump.',
    steps: [
      'Sit on the edge of a flat bench and place palms flat right beside your hips.',
      'Extend legs forward with heels on the floor and slide your glutes forward off the bench.',
      'Lower hips straight down by bending elbows until they form a 90-degree angle.',
      'Press firmly through hands to return to the top, locking out triceps.'
    ]
  },
  {
    id: 'triceps-7',
    name: 'Single-Arm Cable Kickbacks',
    category: 'Triceps',
    difficulty: 'Intermediate',
    targetMuscles: ['Lateral Head', 'Triceps Long Head'],
    duration: '3 Sets x 12-15 Reps each arm',
    calories: '115 kcal',
    equipment: 'Cable Machine (No Handle)',
    image: '/images/cable-kickbacks.jpg',
    fallbackImage: '/images/dumbbells.jpg',
    description: 'Delivers continuous resistance at terminal extension where dumbbells lose tension, maximizing peak contraction.',
    steps: [
      'Set cable pulley to hip height without an attachment and grip bare cable end with one hand.',
      'Hinge forward at waist with upper arm pinned parallel to your torso.',
      'Extend forearm backward in a strict arc until arm is completely straight.',
      'Squeeze triceps intensely at full extension before slowly returning to 90 degrees.'
    ]
  },
  {
    id: 'triceps-8',
    name: 'Straight-Bar Cable Pushdowns',
    category: 'Triceps',
    difficulty: 'Beginner',
    targetMuscles: ['Triceps Brachii (Lateral & Medial Heads)'],
    duration: '4 Sets x 10-12 Reps',
    calories: '130 kcal',
    equipment: 'Cable Machine & Straight Bar',
    image: '/images/triceps-pushdown.jpg',
    fallbackImage: '/images/bench-press.jpg',
    description: 'Rigid straight-bar attachment permits heavier loading than ropes, heavily overloading the lateral and medial triceps heads.',
    steps: [
      'Grip straight bar overhand at shoulder-width, keeping elbows tucked against ribs.',
      'Lean torso slightly forward from the waist for balanced leverage.',
      'Drive bar downward until arms lock out completely at bottom.',
      'Control the eccentric return until forearms are just above horizontal before next rep.'
    ]
  },
  {
    id: 'triceps-9',
    name: 'Diamond Push-Ups',
    category: 'Triceps',
    difficulty: 'Intermediate',
    targetMuscles: ['Triceps Brachii (All 3 Heads)', 'Inner Chest', 'Front Delts'],
    duration: '3 Sets x 12-15 Reps',
    calories: '135 kcal',
    equipment: 'Bodyweight',
    image: '/images/pushups.jpg',
    fallbackImage: '/images/bench-dips.jpg',
    description: 'Narrow hand placement shifts primary mechanical leverage directly onto triceps, forming an exceptional calisthenic arm builder.',
    steps: [
      'Form a high plank with thumbs and index fingers touching under chest in a diamond/triangle shape.',
      'Keep core braced and spine neutral from head to heels.',
      'Lower chest toward diamond shape while keeping elbows tracking back close to your sides.',
      'Press the floor away aggressively through triceps until elbows reach full lockout.'
    ]
  },
  {
    id: 'triceps-10',
    name: 'Overhead Cable Rope Triceps Extension',
    category: 'Triceps',
    difficulty: 'Intermediate',
    targetMuscles: ['Long Head of Triceps', 'Elbow Stabilizers'],
    duration: '4 Sets x 12-15 Reps',
    calories: '140 kcal',
    equipment: 'Cable Machine & Rope Attachment',
    image: '/images/overhead-triceps-extension.jpg',
    fallbackImage: '/images/triceps-pushdown.jpg',
    description: 'Constant cable tension through overhead stretch targets the stubborn long head for optimal triceps horseshoe fullness.',
    steps: [
      'Attach rope to mid-to-high pulley, face away from machine, and bring rope overhead with elbows bent.',
      'Take a staggered split stance for balance and lean torso forward 30 degrees.',
      'Extend elbows forward and upward, spreading rope handles apart at full arm extension.',
      'Squeeze triceps at lockout, then return hands behind head under smooth control for deep stretch.'
    ]
  },

  // ==========================================
  // 6. LEG (10 Exercises)
  // ==========================================
  {
    id: 'leg-1',
    name: 'Barbell Back Squats',
    category: 'Leg',
    difficulty: 'Advanced',
    targetMuscles: ['Quadriceps', 'Glutes', 'Adductors', 'Core'],
    duration: '4 Sets x 6-8 Reps',
    calories: '240 kcal',
    equipment: 'Barbell & Squat Rack',
    image: '/images/barbell-back-squats.jpg',
    fallbackImage: '/images/lunges.jpg',
    description: 'The undisputed king of lower-body compound movements for developing massive quad size, hip drive, and leg power.',
    steps: [
      'Rest barbell securely across your upper traps, gripping bar with hands outside shoulders.',
      'Set feet shoulder-width apart with toes angled slightly outward at 15 to 30 degrees.',
      'Inhale into abdomen, hinge hips back and push knees outward, descending until thighs break parallel.',
      'Drive upward through your mid-foot and heels, keeping chest tall until standing locked out.'
    ]
  },
  {
    id: 'leg-2',
    name: 'Romanian Deadlift (RDL)',
    category: 'Leg',
    difficulty: 'Intermediate',
    targetMuscles: ['Hamstrings', 'Gluteus Maximus', 'Erector Spinae'],
    duration: '4 Sets x 8-10 Reps',
    calories: '210 kcal',
    equipment: 'Barbell or Dumbbells',
    image: '/images/romanian-deadlift.jpg',
    fallbackImage: '/images/squats.jpg',
    description: 'The premier hip-hinge exercise for lengthening and loading hamstrings and building powerful, rounded glutes.',
    steps: [
      'Hold barbell at hip height with an overhand shoulder-width grip, standing tall.',
      'Keep knees softly bent and push hips straight backward as if reaching for a wall.',
      'Slide the bar down your shins while maintaining a flat spine until hamstrings feel fully stretched.',
      'Drive hips forward explosively to return to standing position, squeezing glutes at top.'
    ]
  },
  {
    id: 'leg-3',
    name: 'Bulgarian Split Squats',
    category: 'Leg',
    difficulty: 'Advanced',
    targetMuscles: ['Quadriceps', 'Glutes', 'Hamstrings', 'Balance'],
    duration: '3 Sets x 8-10 Reps each leg',
    calories: '200 kcal',
    equipment: 'Dumbbells & Flat Bench',
    image: '/images/bulgarian-split-squats.jpg',
    fallbackImage: '/images/squats.jpg',
    description: 'An elite unilateral leg developer that rectifies side-to-side strength deficits, increases hip mobility, and destroys quads.',
    steps: [
      'Stand 2-3 feet in front of a flat bench and place the top of your rear foot onto the bench pad.',
      'Hold dumbbells at sides with chest upright and core braced.',
      'Lower hips down and back until front thigh is parallel to floor and rear knee hovers above deck.',
      'Push through the front heel to drive back up to the starting position.'
    ]
  },
  {
    id: 'leg-4',
    name: 'Leg Press (45-Degree Sled)',
    category: 'Leg',
    difficulty: 'Beginner',
    targetMuscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
    duration: '4 Sets x 10-12 Reps',
    calories: '190 kcal',
    equipment: '45-Degree Leg Press Machine',
    image: '/images/leg-press.jpg',
    fallbackImage: '/images/lunges.jpg',
    description: 'Permits heavy lower-body progressive overload without spinal loading, ideal for driving massive quad hypertrophy safely.',
    steps: [
      'Sit in machine with lower back flat against backrest and feet shoulder-width on the platform.',
      'Disengage safety catches and lower sled under control until knees reach a 90-degree angle.',
      'Keep tailbone pinned flat to the cushion throughout the descent.',
      'Press platform upward through mid-foot and heels without violently locking knees at top.'
    ]
  },
  {
    id: 'leg-5',
    name: 'Leg Extensions (Quad Extensions)',
    category: 'Leg',
    difficulty: 'Beginner',
    targetMuscles: ['Quadriceps (Rectus Femoris, Vastus Lateralis/Medialis)'],
    duration: '4 Sets x 12-15 Reps',
    calories: '140 kcal',
    equipment: 'Leg Extension Machine',
    image: '/images/leg-extensions.jpg',
    fallbackImage: '/images/squats.jpg',
    description: 'The premier quad isolation movement that places continuous tension on the front of the thighs through terminal knee extension.',
    steps: [
      'Sit back firmly against the pad with knees aligned with the machine pivot point.',
      'Hook shins securely behind the padded roller just above the ankles.',
      'Grip the side handles and extend knees smoothly until legs are nearly straight.',
      'Hold peak quadriceps contraction for one second before lowering weight under strict control.'
    ]
  },
  {
    id: 'leg-6',
    name: 'Walking Dumbbell Lunges',
    category: 'Leg',
    difficulty: 'Intermediate',
    targetMuscles: ['Quadriceps', 'Glutes', 'Hamstrings', 'Calves'],
    duration: '3 Sets x 20 Total Paces',
    calories: '175 kcal',
    equipment: 'Dumbbells',
    image: '/images/lunges.jpg',
    fallbackImage: '/images/dumbbells.jpg',
    description: 'Dynamic locomotion drill cultivating functional lower body stamina, knee tracking stability, and glute shaping.',
    steps: [
      'Hold dumbbells at sides and stand tall with feet hip-width apart.',
      'Step forward with one leg into a deep lunge until both knees reach approximately 90 degrees.',
      'Drive up through front heel and step your back foot forward directly into the next lunge.',
      'Continue in a measured, balanced walking cadence with an upright torso.'
    ]
  },
  {
    id: 'leg-7',
    name: 'Standing Calf Raises',
    category: 'Leg',
    difficulty: 'Beginner',
    targetMuscles: ['Gastrocnemius', 'Soleus'],
    duration: '4 Sets x 15-20 Reps',
    calories: '110 kcal',
    equipment: 'Calf Raise Machine or Step',
    image: '/images/standing-calf-raises.jpg',
    fallbackImage: '/images/squats.jpg',
    description: 'Builds dense calf muscles and reinforces ankle stability through full-range plantarflexion and stretch.',
    steps: [
      'Position balls of feet on edge of calf block with heels dropping down into a deep stretch.',
      'Keep knees straight with a soft unlocked joint to isolate the gastrocnemius.',
      'Press up onto balls of feet as high as possible, squeezing calves at top.',
      'Lower heels slowly back down below the step level for a 2-second stretch pause.'
    ]
  },
  {
    id: 'leg-8',
    name: 'Lying Hamstring Leg Curls',
    category: 'Leg',
    difficulty: 'Beginner',
    targetMuscles: ['Hamstrings (Biceps Femoris, Semitendinosus)', 'Calves'],
    duration: '4 Sets x 10-12 Reps',
    calories: '145 kcal',
    equipment: 'Lying Leg Curl Machine',
    image: '/images/leg-extensions.jpg',
    fallbackImage: '/images/squats.jpg',
    description: 'Lying prone eliminates hip assistance to isolate pure knee flexion, forging thick hamstring bellies.',
    steps: [
      'Lie face down on machine with roller pad positioned just below calf bellies and above heels.',
      'Grip side handles and keep hips pressed flat against bench pad.',
      'Curl heels upward toward glutes in a smooth, powerful motion.',
      'Pause for 1 second at full knee flexion, then lower weight slowly over 3 seconds.'
    ]
  },
  {
    id: 'leg-9',
    name: 'Barbell Front Squats',
    category: 'Leg',
    difficulty: 'Advanced',
    targetMuscles: ['Quadriceps (Vastus Medialis / Teardrop)', 'Upper Back', 'Core'],
    duration: '4 Sets x 6-8 Reps',
    calories: '225 kcal',
    equipment: 'Barbell & Squat Rack',
    image: '/images/barbell-back-squats.jpg',
    fallbackImage: '/images/squats.jpg',
    description: 'Front-loaded barbell forces an upright torso, transferring intense loading directly to the anterior quads and core.',
    steps: [
      'Rest barbell across anterior deltoids in a clean grip or crossed-arm rack with elbows held high.',
      'Stand with feet shoulder-width and toes flared slightly out.',
      'Squat down between your hips while keeping elbows elevated and chest proud until hips break parallel.',
      'Drive up through mid-foot and quads to standing position without letting elbows dip.'
    ]
  },
  {
    id: 'leg-10',
    name: 'Seated Calf Raises',
    category: 'Leg',
    difficulty: 'Beginner',
    targetMuscles: ['Soleus (Deep Calf Muscle)', 'Achilles Tendon'],
    duration: '4 Sets x 15-20 Reps',
    calories: '115 kcal',
    equipment: 'Seated Calf Machine',
    image: '/images/standing-calf-raises.jpg',
    fallbackImage: '/images/squats.jpg',
    description: 'Bent knees disengage the gastrocnemius, targeting the soleus muscle beneath to widen lower leg circumference.',
    steps: [
      'Sit on machine with balls of feet on platform and padded lever resting comfortably on lower thighs.',
      'Release safety bar and lower heels as far as comfortably possible into full stretch.',
      'Push through balls of feet to raise heels to absolute highest point, holding for 1 second.',
      'Lower heels slowly under control for a 2-second stretch pause before the next repetition.'
    ]
  },

  // ==========================================
  // 7. CARDIO (10 Exercises)
  // ==========================================
  {
    id: 'cardio-1',
    name: 'High-Intensity Interval Sprinting (HIIT)',
    category: 'Cardio',
    difficulty: 'Advanced',
    targetMuscles: ['Cardiovascular System', 'Hamstrings', 'Glutes', 'Calves'],
    duration: '20 Mins (30s Sprint / 60s Walk)',
    calories: '290 kcal',
    equipment: 'Treadmill or Track',
    image: '/images/running.jpg',
    fallbackImage: '/images/cycling.jpg',
    description: 'Explosive sprint intervals that maximize VO2 max, trigger high post-exercise calorie burn (EPOC), and strip body fat.',
    steps: [
      'Warm up for 5 minutes with light jogging and dynamic leg swings.',
      'Accelerate into an all-out 90-100% effort sprint for 30 seconds with aggressive arm drive.',
      'Decelerate safely and transition to an active recovery walk for 60 seconds.',
      'Repeat for 8 to 10 rounds, concluding with a 5-minute cool-down walk.'
    ]
  },
  {
    id: 'cardio-2',
    name: 'Jump Rope Speed Intervals',
    category: 'Cardio',
    difficulty: 'Beginner',
    targetMuscles: ['Calves', 'Shoulders', 'Forearms', 'Aerobic Base'],
    duration: '15 Mins Intervals',
    calories: '190 kcal',
    equipment: 'Jump Rope',
    image: '/images/skipping-rope.jpg',
    fallbackImage: '/images/running.jpg',
    description: 'Rhythmic, agility-enhancing cardiovascular conditioning that burns rapid calories and sharpens footwork.',
    steps: [
      'Hold handles lightly with elbows tucked close to your ribcage.',
      'Turn the rope using small wrist circles rather than large arm swings.',
      'Bounce lightly on the balls of your feet, clearing rope by 1-2 inches.',
      'Keep an upright spine and rhythmic nasal/mouth breathing cadence.'
    ]
  },
  {
    id: 'cardio-3',
    name: 'Stationary Cycling Spin Sprints',
    category: 'Cardio',
    difficulty: 'Intermediate',
    targetMuscles: ['Quadriceps', 'Glutes', 'Lungs'],
    duration: '25 Mins Spin Circuit',
    calories: '230 kcal',
    equipment: 'Stationary Spin Bike',
    image: '/images/cycling.jpg',
    fallbackImage: '/images/running.jpg',
    description: 'Joint-friendly low-impact cardiovascular workout alternating heavy resistance climbs with rapid high-RPM sprints.',
    steps: [
      'Set saddle height so knees have a slight 5-10 degree bend at bottom pedal stroke.',
      'Warm up with easy resistance for 3-4 minutes to elevate heart rate.',
      'Turn up resistance dial and sprint all-out out of saddle for 30 seconds.',
      'Sit down and recover with moderate cadence for 60 seconds. Repeat 8-10 times.'
    ]
  },
  {
    id: 'cardio-4',
    name: 'Rowing Machine 500m Intervals',
    category: 'Cardio',
    difficulty: 'Intermediate',
    targetMuscles: ['Full Body', 'Lats', 'Legs', 'Cardiovascular System'],
    duration: '20 Mins (5 x 500m)',
    calories: '250 kcal',
    equipment: 'Concept2 Indoor Rower',
    image: '/images/rowing-machine.jpg',
    fallbackImage: '/images/running.jpg',
    description: 'Recruits 86% of the bodys skeletal muscle mass, pairing intense aerobic conditioning with posterior chain endurance.',
    steps: [
      'Strap feet securely and grip handle with an overhand shoulder-width grip.',
      'Initiate drive phase by pushing powerfully through legs first.',
      'Hinge torso back slightly, then pull handle smoothly into your lower sternum.',
      'Extend arms forward, hinge hips, and bend knees to return to catch position.'
    ]
  },
  {
    id: 'cardio-5',
    name: 'Burpee Broad Jumps',
    category: 'Cardio',
    difficulty: 'Advanced',
    targetMuscles: ['Full Body', 'Chest', 'Quadriceps', 'Core'],
    duration: '4 Sets x 12 Reps',
    calories: '210 kcal',
    equipment: 'Bodyweight',
    image: '/images/pushups.jpg',
    fallbackImage: '/images/running.jpg',
    description: 'A high-intensity metabolic conditioning drill uniting pushup stamina, anaerobic stamina, and explosive jump power.',
    steps: [
      'Stand tall, drop hands to floor, and kick feet back into a pushup plank.',
      'Perform a full chest-to-ground pushup.',
      'Snap feet forward towards hands and immediately leap forward in an explosive broad jump.',
      'Land softly on bent knees, pivot around and immediately begin the next repetition.'
    ]
  },
  {
    id: 'cardio-6',
    name: 'Stair Climber Interval Climb',
    category: 'Cardio',
    difficulty: 'Intermediate',
    targetMuscles: ['Glutes', 'Calves', 'Quadriceps', 'Heart'],
    duration: '20 Mins Step Intervals',
    calories: '220 kcal',
    equipment: 'StairMaster / Stepmill',
    image: '/images/stair-climber.jpg',
    fallbackImage: '/images/skipping-rope.jpg',
    description: 'Constant vertical step climbing that tightens glutes, tones quads, and torches calories without joint impact.',
    steps: [
      'Step onto machine and select manual speed, warming up at steady pace for 3 minutes.',
      'Rest fingertips lightly on side rails for balance only — avoid leaning bodyweight on hands.',
      'Alternate between 2 minutes of moderate cadence and 1 minute of fast climbing.',
      'Drive down through whole foot on each step to maximize glute recruitment.'
    ]
  },
  {
    id: 'cardio-7',
    name: 'Mountain Climbers & Bear Crawls',
    category: 'Cardio',
    difficulty: 'Beginner',
    targetMuscles: ['Core', 'Shoulders', 'Hip Flexors', 'Cardio Engine'],
    duration: '4 Sets x 45 Secs',
    calories: '160 kcal',
    equipment: 'Bodyweight',
    image: '/images/mountain-climbers.jpg',
    fallbackImage: '/images/pushups.jpg',
    description: 'Dynamic floor-based bodyweight cardio targeting core stability, shoulder endurance, and rapid heart rate spike.',
    steps: [
      'Start in high pushup plank position with hands under shoulders and feet hip-width.',
      'Drive right knee forward toward chest without letting hips pike into the air.',
      'Quickly jump-switch legs, extending right leg back while driving left knee to chest.',
      'Maintain a rapid running cadence while keeping abdominal wall braced tightly.'
    ]
  },
  {
    id: 'cardio-8',
    name: 'Assault / Air Bike Tabata Intervals',
    category: 'Cardio',
    difficulty: 'Advanced',
    targetMuscles: ['Full Body', 'Quads', 'Shoulders', 'Cardiovascular Engine'],
    duration: '16 Mins (20s Max / 10s Rest Tabata)',
    calories: '280 kcal',
    equipment: 'Air / Assault Bike',
    image: '/images/cycling.jpg',
    fallbackImage: '/images/running.jpg',
    description: 'Dual-action arm and leg wind-resistance bike creating brutal, exponential metabolic output for total-body fat burning.',
    steps: [
      'Adjust seat height so knees have a slight bend at bottom of pedal stroke.',
      'Warm up with easy RPMs for 3 minutes.',
      'Sprint at 100% maximum wattage for 20 seconds, aggressively pumping handles and pedals.',
      'Rest completely for 10 seconds. Complete 8 rounds per Tabata cycle.'
    ]
  },
  {
    id: 'cardio-9',
    name: 'Plyometric Box Jumps',
    category: 'Cardio',
    difficulty: 'Intermediate',
    targetMuscles: ['Fast-Twitch Muscle Fibers', 'Glutes', 'Quads', 'Calves'],
    duration: '4 Sets x 10 Reps',
    calories: '180 kcal',
    equipment: 'Plyo Box (20-30 Inch)',
    image: '/images/running.jpg',
    fallbackImage: '/images/squats.jpg',
    description: 'Builds explosive vertical jump power, elastic tendon recoil, and high-energy cardiovascular conditioning.',
    steps: [
      'Stand 1-2 feet in front of a sturdy plyometric box with feet shoulder-width apart.',
      'Swing arms back and hinge hips into a quarter-squat.',
      'Explode upward and forward, swinging arms up to leap onto the center of the box.',
      'Land softly on the balls of feet with knees bent to absorb impact, then step down safely.'
    ]
  },
  {
    id: 'cardio-10',
    name: 'Shadow Boxing & Speed Combos',
    category: 'Cardio',
    difficulty: 'Beginner',
    targetMuscles: ['Shoulders', 'Core Rotators', 'Footwork', 'Cardiovascular System'],
    duration: '5 Rounds x 3 Mins',
    calories: '240 kcal',
    equipment: 'Bodyweight / Hand Wraps',
    image: '/images/skipping-rope.jpg',
    fallbackImage: '/images/running.jpg',
    description: 'High-tempo combat conditioning that elevates hand-eye coordination, rotational core agility, and stamina.',
    steps: [
      'Adopt an athletic boxer stance with hands up protecting chin and elbows tucked.',
      'Throw snappy punch combinations (Jab-Cross-Hook-Uppercut) while rotating hips.',
      'Stay light on the balls of feet, constantly moving laterally and slipping head.',
      'Maintain sharp exhalations on each punch and keep active defense throughout 3-minute rounds.'
    ]
  },

  // ==========================================
  // 8. STRENGTH (10 Exercises)
  // ==========================================
  {
    id: 'strength-1',
    name: 'Heavy Barbell Bench Press (5x5)',
    category: 'Strength',
    difficulty: 'Advanced',
    targetMuscles: ['Pectoralis Major', 'Triceps', 'Front Delts', 'Core'],
    duration: '5 Sets x 5 Reps',
    calories: '200 kcal',
    equipment: 'Barbell & Heavy Bench',
    image: '/images/bench-press.jpg',
    fallbackImage: '/images/pushups.jpg',
    description: 'The quintessential powerlifting upper-body strength benchmark for developing maximum pressing tonnage and bone density.',
    steps: [
      'Plant feet into the floor, arch upper back, and pull shoulder blades tightly together on the bench.',
      'Unrack heavy barbell with locked elbows and take a deep diaphragmatic breath into core.',
      'Lower bar with strict control until it touches your mid-chest, pausing for a split second.',
      'Press bar upward explosively along a slight arc back to locked out arm position.'
    ]
  },
  {
    id: 'strength-2',
    name: 'Barbell Back Box Squats',
    category: 'Strength',
    difficulty: 'Advanced',
    targetMuscles: ['Glutes', 'Hamstrings', 'Quadriceps', 'Spinal Erectors'],
    duration: '5 Sets x 5 Reps',
    calories: '230 kcal',
    equipment: 'Barbell & Squat Box',
    image: '/images/squats.jpg',
    fallbackImage: '/images/deadlifts.jpg',
    description: 'Breaks the eccentric-concentric chain at the bottom of the squat to develop tremendous starting power and hip drive.',
    steps: [
      'Position a rigid squat box behind you set to parallel knee height.',
      'Unrack barbell across upper traps, step back, and sit back onto box with a wide stance.',
      'Pause on the box for 1 full second without rocking backward or losing core tension.',
      'Drive upward off box through your heels violently to standing lockout.'
    ]
  },
  {
    id: 'strength-3',
    name: 'Trap Bar (Hex Bar) Deadlift',
    category: 'Strength',
    difficulty: 'Intermediate',
    targetMuscles: ['Posterior Chain', 'Quadriceps', 'Traps', 'Forearm Grip'],
    duration: '4 Sets x 6 Reps',
    calories: '240 kcal',
    equipment: 'Hex / Trap Bar & Plates',
    image: '/images/deadlifts.jpg',
    fallbackImage: '/images/squats.jpg',
    description: 'Aligns weight with your center of mass using neutral handles, allowing maximum weight loads with minimal spinal shear.',
    steps: [
      'Step inside hex bar with feet hip-width apart and shins centered.',
      'Hinge down and grip center handles with neutral wrists, pulling chest up high.',
      'Brace abdominals hard and squeeze armpits to lock lats.',
      'Push the floor away through your heels to stand tall without leaning backward at the top.'
    ]
  },
  {
    id: 'strength-4',
    name: 'Standing Barbell Overhead Press',
    category: 'Strength',
    difficulty: 'Advanced',
    targetMuscles: ['Deltoids', 'Triceps', 'Upper Chest', 'Core'],
    duration: '4 Sets x 6 Reps',
    calories: '175 kcal',
    equipment: 'Barbell',
    image: '/images/shoulder-press.jpg',
    fallbackImage: '/images/bench-press.jpg',
    description: 'Pure standing vertical structural strength requiring total-body rigidity from heels to hands to press heavy weight overhead.',
    steps: [
      'Hold barbell across front shoulders with hands just outside shoulders and forearms vertical.',
      'Squeeze glutes and abs hard to form a rigid pillar.',
      'Press bar in a straight vertical path, moving head back to clear chin, then pushing head through.',
      'Lock out overhead with bar stacked over ankles, then lower under control.'
    ]
  },
  {
    id: 'strength-5',
    name: 'Weighted Pull-Ups',
    category: 'Strength',
    difficulty: 'Advanced',
    targetMuscles: ['Lats', 'Upper Back', 'Biceps', 'Brachialis'],
    duration: '4 Sets x 5 Reps',
    calories: '180 kcal',
    equipment: 'Dip Belt & Weight Plates',
    image: '/images/pullups.jpg',
    fallbackImage: '/images/deadlifts.jpg',
    description: 'The premier upper-body pulling strength test; adding external load drives incredible back thickness and grip power.',
    steps: [
      'Fasten dipping belt securely with weight plates around waist and grip bar with overhand grip.',
      'Hang at full stretch with shoulders depressed and core tight.',
      'Pull yourself upward explosively until chin clears the bar cleanly.',
      'Lower with strict control for 3 full seconds back to dead hang.'
    ]
  },
  {
    id: 'strength-6',
    name: 'Heavy Dumbbell Farmer’s Walk',
    category: 'Strength',
    difficulty: 'Intermediate',
    targetMuscles: ['Trapezius', 'Forearms / Grip', 'Core', 'Glutes'],
    duration: '4 Sets x 40 Meters',
    calories: '190 kcal',
    equipment: 'Heavy Dumbbells or Kettlebells',
    image: '/images/dumbbells.jpg',
    fallbackImage: '/images/kettlebell.jpg',
    description: 'Loaded carry test that forges crushing grip strength, massive trapezius thickness, and an impenetrable core.',
    steps: [
      'Deadlift two heavy dumbbells off the floor, standing upright with tall, proud chest.',
      'Retract shoulder blades slightly and lock ribs down without leaning sideways.',
      'Walk forward using short, rhythmic heel-to-toe steps with zero torso sway.',
      'Set weights down under control once target distance is completed.'
    ]
  },
  {
    id: 'strength-7',
    name: 'Barbell Pendlay Row',
    category: 'Strength',
    difficulty: 'Intermediate',
    targetMuscles: ['Mid-Back', 'Lats', 'Rear Delts', 'Hamstrings'],
    duration: '4 Sets x 6-8 Reps',
    calories: '170 kcal',
    equipment: 'Barbell & Bumper Plates',
    image: '/images/deadlifts.jpg',
    fallbackImage: '/images/pullups.jpg',
    description: 'Strict horizontal row initiated from a dead stop on the floor each rep, building explosive pulling power and upper back density.',
    steps: [
      'Set barbell on floor over midfoot with torso strictly parallel to the floor.',
      'Grasp bar with an overhand grip wider than knees and lock lower back flat.',
      'Explosively row the barbell up to touch the lower sternum without rising out of hinge.',
      'Lower bar all the way back to rest on the floor before starting each new repetition.'
    ]
  },
  {
    id: 'strength-8',
    name: 'Barbell Good Mornings',
    category: 'Strength',
    difficulty: 'Advanced',
    targetMuscles: ['Hamstrings', 'Glutes', 'Erector Spinae', 'Thoracic Spine'],
    duration: '4 Sets x 6-8 Reps',
    calories: '175 kcal',
    equipment: 'Barbell & Squat Rack',
    image: '/images/squats.jpg',
    fallbackImage: '/images/deadlifts.jpg',
    description: 'Posterior chain pure hinge overload that develops bulletproof lower back resilience and explosive hamstring strength.',
    steps: [
      'Unrack barbell across upper traps with a tight shoulder-width stance and soft knees.',
      'Brace core deeply and hinge hips straight backward, keeping chest tall and spine flat.',
      'Descend until torso is nearly parallel to the floor and hamstrings are heavily loaded.',
      'Drive hips forward forcefully to return to standing position, squeezing glutes.'
    ]
  },
  {
    id: 'strength-9',
    name: 'Weighted Parallel Bar Dips',
    category: 'Strength',
    difficulty: 'Advanced',
    targetMuscles: ['Lower Chest', 'Triceps', 'Anterior Deltoids', 'Pectoralis Major'],
    duration: '4 Sets x 6 Reps',
    calories: '195 kcal',
    equipment: 'Dip Station & Dipping Belt with Weight Plates',
    image: '/images/parallel-bar-dips.jpg',
    fallbackImage: '/images/bench-press.jpg',
    description: 'Often called the upper-body squat; strapping external weight plates to bodyweight dips builds monstrous pressing tonnage.',
    steps: [
      'Secure dipping belt with weight plates around waist and mount dip bars with locked arms.',
      'Lean torso forward slightly to engage chest and triceps equally.',
      'Lower body with strict control until shoulders drop below elbows (90-degree angle).',
      'Press through palms forcefully until arms lock out at top without swinging.'
    ]
  },
  {
    id: 'strength-10',
    name: 'Deficit Barbell Deadlift',
    category: 'Strength',
    difficulty: 'Advanced',
    targetMuscles: ['Hamstrings', 'Glutes', 'Lats', 'Quads', 'Erector Spinae'],
    duration: '4 Sets x 5 Reps',
    calories: '260 kcal',
    equipment: 'Barbell & 2-3 Inch Weight Plate / Platform',
    image: '/images/deadlifts.jpg',
    fallbackImage: '/images/squats.jpg',
    description: 'Standing on a 2-3 inch elevated platform extends the pulling range of motion, dramatically increasing leg drive and starting floor speed.',
    steps: [
      'Stand on a 2-3 inch elevated platform or bumper plate with barbell centered over midfoot.',
      'Hinge down with hips slightly lower than normal, gripping bar with overhand or mixed grip.',
      'Take a deep belly breath, expand ribcage, and pack lats tightly.',
      'Push the floor away through your heels aggressively to break the bar off the floor to lockout.'
    ]
  }
];
