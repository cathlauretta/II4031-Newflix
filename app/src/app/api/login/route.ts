import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../utils/supabase";
import { v4 as uuidv4 } from 'uuid';

export const POST = async (req: NextRequest) => {
  const { username, password } = await req.json();
  
  try {
    const { data, error } = await supabase
      .from("user")
      .select("address")
      .eq("username", username)
      .eq("password", password)
      .single();
    
    if (error) {
      throw error;
    }

    if (data) {
      const sessionToken = data.address;
      const tokenExpiration = new Date();
      tokenExpiration.setDate(tokenExpiration.getDate() + 7);

      const responseUser = {
        address: data.address,
        username: username,
      };
  
      const response = NextResponse.json({ message: 'Login berhasil', user: responseUser, success: true }, { status: 200 });
      response.cookies.set('sessionToken', sessionToken);
  
      return response;
    } else {
      return NextResponse.json({ message: "Invalid username or password", success: false }, { status: 401 });
    }
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ message: "Internal Server Error", err }, { status: 500 });
  }
};