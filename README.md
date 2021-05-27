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
* Lightning

## Implementation Plan


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


