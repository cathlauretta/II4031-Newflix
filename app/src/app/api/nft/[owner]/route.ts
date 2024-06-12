import { NextRequest, NextResponse } from "next/server";
import { mintTokens } from "../../../../utils/postnft"; // Import the mintTokens function
import { supabase } from "../../../../utils/supabase";
const { getTokenIdsByOwner } = require('../../../../utils/ownernft');

export const GET = async (
    req: NextRequest,
    { params }: { params: { owner: string } },
  ) => {
    const owner = params.owner;
  
    if (!owner) {
      return NextResponse.json(
        { message: "Missing owner parameter" },
        { status: 400 },
      );
    }

    try {
      const { tokenIds } = await getTokenIdsByOwner(owner);
      const convertedTokenIds = tokenIds.map((id: any) => Number(id)); // Convert BigInt to number
      return NextResponse.json({ data: convertedTokenIds }, { status: 200 });
    } catch (err) {
      console.log(err);
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  };
