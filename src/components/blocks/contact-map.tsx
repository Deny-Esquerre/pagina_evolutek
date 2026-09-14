"use client";

import { Map, MapControls, MapMarker, MarkerContent, MarkerPopup } from "@/components/ui/map";

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
        <MarkerPopup open closeButton>
          <div className="flex flex-col items-center gap-2 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Evolutek" className="h-8 w-auto" />
            <p className="text-foreground text-sm font-semibold">
              Oficina principal de EVOLUTEK
            </p>
            <p className="text-muted-foreground text-xs">
              Urbanización Enapu A-14, Talara, Piura, Perú
            </p>
          </div>
        </MarkerPopup>
      </MapMarker>
    </Map>
  );
}
