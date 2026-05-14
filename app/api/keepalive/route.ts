import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET() {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { error } = await supabase
    .from('email_signups')
    .select('id')
    .limit(1);

  if (error) {
    return NextResponse.json({ error: 'DB ping failed', detail: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, ts: new Date().toISOString() });
}
