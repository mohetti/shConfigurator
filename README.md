# Smart Home Configurator

## Intro

### Goal
The goals of the Smart Home Configurator are as follows:
1. The user gets a full list of products based on their choices, whether the products are compatible or not.
2. The user gets multiple options to choose from, all with one "mother"-system, that the rest is related to.
3. The displayed options try to include as view systems as possible with as many fully compatible flags as possible.

### The Overview Display
On the overview display, users see the different options they can choose from. These are clickable to 
see a full product list. The overview display containers are styled as follows (top to bottom):
1. Name of "mother"-system
2. basic text => "Anzahl Basisstationen:" | "Number of basestations:"
  * this number is based on the "mother"-system's base and the additionally required bases from sub-systems
2. basic text => "in Verbindung mit:" | "combined with:"
3. sub-systems, that are also needed
  * the sub-systems come with a green, yellow or red circle. This stands for compatible, partially compatible and not compatible
4. basic text => "Zur Auflistung:" | "Go to the listing:"

### Categories
To start with, there are three categories to choose from for the user:
* Security
* Heating
* Lighting

## Implementation Plan
### Frontend (React)
#### Goal
The goal is a configurator layout, where the user gets assisted from start to finish. The user chooses with button clicks,
which device types he wants to have in his Smart Home. When he clicks on next, he gets redirected, until he finished the
choosing process and gets to the overview display. In the transition, the backend and database come in play.
#### General User Experience
The user starts on the start screen, choosing as many options as he wants of the following:
* Lighting
* Heating
* Security
A "next" button brings the user to the next page. The priority goes to Lighting, then Heating, then Security.
After the start page, all following pages up until the overview of choices before doing the backend request,
have a "back" button. Choices are stored in Sessionstorage.
Where necessary, tooltips can be hovered or are displayed in a collapsable box.
##### Lighting page
Lighting sets priority on lightbulbs, surface spots, lightstrips and plugs. It's displayed
in two rows of three. Lightbulbs have a mini collapsable for the different variants. Two collapsable boxes
for a) indoor lighting and b) garden lighting are displayed. Lighting has the following choices:
Main: 
* E 27 | E 14 | GU 10
  * White
  * Ambiance
  * Multicolor
* surface Spots
 * Ambiance
 * Multicolor
* Lightstrips
* Plugs
  * Dimming
  * Non-Dimming
Indoor:
* recessed Spots
* recessed Switch
* table lamp
* ceiling light
* wall light
Garden:
* wall Light
* path light
* garden spot
* garden lightstrip

##### Heating
Heating has the first three in a row. The fourth needs more space and is a big collapsable:
* radiator
* thermostat wired (24 / 230 V)
* thermostat wireless
* footheating actors

##### Security
Window-, motionsensor and siren are prominent on the top. The rest is below.
* windowsensor
* motionsensor
* siren
* smokedetector
* lock
* doorbell
* camera

#### Implementation Frontend
1. create the Routes
  * start
  * lights
  * heating
  * security
  * confirm
  * overview
  * details
2. style the general look of the configurator container
  * buttons
  * windowsize
  * mobile friendly
  * boxes for later images
  * start over in the top
3. style the general look of the confirm page
4. implement logic
  * safe in session storage
  * next button
  * back button
  * start over button
5. implement pictures, tooltips and alerts
6. Next Step goes to backend => Database setup and backend logic



## Manufactorers and Device Types in the Database
As for manufactorers, the list is devided into "mother"-systems and sub-systems. The "mother"-systems category
only really affects the search-algorithm, if two or all three categories are chosen by the user.

### Manufactorers
#### "mother"-systems
* Bosch
* Magenta
* SmartThings
* Homematic IP
* Lupusec
#### sub-systems
* Philips Hue
* LIFX
* WiZ
* Ikea
* tado
#### not compatible list
The not compatible list links one unique product to each device type. This is the goto list, if the user choice can't be met
and needs to be filled with a not compatible product to the "mother"-system. The list contains as few different systems as possible.

#### Future Implementations
* HomeKit
* Homee
* Devolo

### Device Types
The device types are as follows:
#### General
* basestation
#### For Heating
* thermostatRadiator
* thermostatWired
  * thermostatWired230
  * thermostatWired24
* thermostatWireless
* underfloorHeatingActor
  * underfloorHeatingActor12Motorized
  * underfloorHeatingActor24_06
  * underfloorHeatingActor24_10
  * underfloorHeatingActor230_06
  * underfloorHeatingActor230_10
* boilerExtension
#### For Security
* windowSensor
* motionSensor
  * motionSensorIndoor
  * motionSensorOutdoor
* camera
  * cameraIndoor
  * cameraOutdoor
* doorLock
* doorBellCamera
* siren
  * sirenIndoor
  * sirenOutdoor
* smokeDetector
#### For Lights
* e_27
  * e_27_white
  * e_27_ambiance
  * e_27_multicolor
* e_14
  * e_14_white
  * e_14_ambiance
  * e_14_multicolor
* gu_10
  * gu_10_white
  * gu_10_ambiance
  * gu_10_multicolor
* spots
  * surfaceSpotIndoorAmbiance
  * surfaceSpotIndoorMulticolor
  * recessedSpotWhite
  * recessedSpotAmbiance
  * recessedSpotMulticolor
* plug
* plugDimm
* recessedSwitch
* recessedSwitchDimm
* lightstrip
* tableLamp
* ceilingLightsIndoor
  * ceilingLightIndoorAmbiance
  * ceilingLightIndoorMulticolor
* wallLightsIndoor
  * wallLightIndoorAmbiance
  * wallLightIndorMulticolor
* gardenLights
  * wallLightGardenWhite
  * wallLightGardenMulticolor
  * pathLightWhite
  * pathLightMulticolor
  * gardenSpotMulticolor
  * lightstripGarden


