"use client";

import { Map, MapControls, MapMarker, MarkerContent, MarkerLabel } from "@/components/ui/map";

const OFFICE_COORDINATES = {
  longitude: -81.26659172553019,
  latitude: -4.587379625947855,
};

export function ContactMap() {
  return (
    <Map
      theme="light"
      center={[OFFICE_COORDINATES.longitude, OFFICE_COORDINATES.latitude]}
      zoom={16}
    >
      <MapControls showZoom />
      <MapMarker
        longitude={OFFICE_COORDINATES.longitude}
        latitude={OFFICE_COORDINATES.latitude}
      >
        <MarkerContent>
          <div className="size-4 rounded-full border-2 border-white bg-[#191A55] shadow-lg" />
        </MarkerContent>
        <MarkerLabel
          position="bottom"
          className="rounded-md bg-[#191A55] px-2 py-1 text-white shadow-sm"
        >
          Urbanización Enapu A-14, Talara
        </MarkerLabel>
      </MapMarker>
    </Map>
  );
}
