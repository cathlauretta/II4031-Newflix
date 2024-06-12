import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";

export const GET = async (req: NextRequest) => {
  try {
    return NextResponse.json({ string :"hello world" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "err" }, { status: 200 });
  }
};
