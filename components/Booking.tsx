"use client"
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Booking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return (
    <div className="w-full h-screen flex justify-center items-center p-4 mt-8">
      <div className="w-full max-w-5xl h-full sm:h-[700px] shadow-lg rounded-xl overflow-hidden">
        <Cal
          namespace="15min"
          calLink="aryan-aryan-vb68t7/15min"
          style={{ width: "100%", height: "100%" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </div>
  );
}